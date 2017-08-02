import * as axios from 'axios'
import * as wtfWikipedia from 'wtf_wikipedia'
const wordFilter = require('../../../../data/wordFilter.json')

// STEP 1 - SOURCES

function clickSource (event) {
  const element = event.target
  if (element.className === '') {
    element.className = 'active'
  } else if (element.className === 'active') {
    element.className = ''
  }
}

function addListenersToSourcesForm () {
  const list = document.querySelectorAll('.sources_list_entry')
  for (var item of list) {
    item.addEventListener('click', clickSource)
  }

  document.querySelector('#sources_form').addEventListener('submit', function (e) {
    e.preventDefault()
    searchWords()
  })
}

// search sources based on user input
export const searchSources = function () {
  const term = document.querySelector('#search_input').value
  const url = `https://en.wikipedia.org/w/api.php`
  const params = {
    action: 'opensearch',
    search: term,
    limit: 10,
    namespace: 0,
    origin: '*',
    format: 'json'
  }

  axios.get(url, {params})
    .then(function (res) {
      const html = res.data[1].map((source, i) => {
        return `
          <div class='sources_list_entry'>
            <p> ${source} </p>
          </div>
        `
      }).join('')

      const top = "<div id='sources_list'>"
      const bottom = '</div> <input id="sources_link" type="submit" value="Find words">'
      const finalHtml = top.concat(html).concat(bottom)

      // display next sources screen
      document.querySelector('#search_screen').remove()

      document.querySelector('#sources_form').innerHTML = finalHtml
      document.querySelector('#sources_screen').style.display = 'block'

      addListenersToSourcesForm()
    })
    .catch(function (error) {
      // TODO
      // think of appropriate error handling
      console.log(error)
    })
}

// STEP 2: Words

function searchWords () {
  // get all list entries with class active into array
  let selectedSources = []
  const sources = document.querySelectorAll('.sources_list_entry .active')
  for (var i = sources.length; i--; selectedSources.unshift(sources[i]));

  const urls = selectedSources.map(function (node) { return encodeURI(node.textContent.trim()) })
                              .map(function (title) { return url(title) })

  let promiseArray = urls.map(url => axios.get(url))
  axios.all(promiseArray)
  .then(function (response) {
    let finalWords = (
      response.map(source => parseWikiMarkup(source))
              .filter(deleteMetaPages)
              .map(page => createWordsObject(page))
              .reduce(mergeWordObjects, {})
    )

    // Sort histogram
    let sortedWords = []
    for (var word in finalWords) {
      sortedWords.push([word, finalWords[word]])
    }

    sortedWords.sort(function (a, b) {
      return b[1] - a[1]
    })

    displayResultPage(sortedWords)
  })
}

// creates a wikimedia url for a given page title
function url (title) {
  const url = 'https://en.wikipedia.org/w/api.php'
  const query = `?action=query&titles=${title}&prop=revisions&rvprop=content&format=json&origin=*`
  return url.concat(query)
}

// parses a single wikipedia page
function parseWikiMarkup (source) {
  const page = source.data.query.pages
  let words

  for (var propName in page) {
    const wikiPage = page[propName].revisions['0']['*']
    words = wtfWikipedia.parse(wikiPage)
  }
  return words
}

// returns false for meta pages, so they will be filtered out
function deleteMetaPages (page) {
  if (page.type !== 'page') {
    console.log('Page filtered: ' + page.type)
  }
  return (page.type === 'page')
}

// creates the words object for a single page
function createWordsObject (page) {
  // transform page response sections into word arrays
  // each section ends up as an array of its words
  // TODO for now we are only using sections but there is more text
  // check the page object to fiond out more
  const wordArrays = []

  page.sections.forEach(function (section) {
    section.sentences.forEach(function (sentence) {
      let rawArray = sentence.text.split(' ')

      const wordArray = rawArray.filter(removeNonDomainWords)
                                .filter(removeWordsWithDigits)
                                .filter(removeWordsWithInsideNonWordChars)
                                .filter(removeEmptyWords)
                                .map(word => replaceNonWordCharsFromStartAndEnd(word))

      wordArrays.push(wordArray)
    })
  })

  // create the words object which holds the
  // counts of each word of every word array
  const words = {}

  wordArrays.forEach(function (wordArray) {
    wordArray.forEach(function (word) {
      if (words.hasOwnProperty(word)) {
        words[word] += 1
      } else {
        words[word] = 1
      }
    })
  })

  return words
}

function mergeWordObjects (words, source) {
  const newWords = histoMerge(words, source)
  return newWords
}

function removeWordsWithDigits (word) {
  return !(/.*\d+.*/.test(word))
}

function removeWordsWithInsideNonWordChars (word) {
  return !(/\w+[\W_]+\w+/.test(word))
}

function replaceNonWordCharsFromStartAndEnd (word) {
  return word.replace(/[\W_]+/g, '')
}

function removeEmptyWords (word) {
  return !(word === '')
}

function removeNonDomainWords (word) {
  const nonDomainWords = wordFilter.filterWords
  for (let i = 0; i < nonDomainWords.length; i++) {
    if (word.toLowerCase() === nonDomainWords[i].toLowerCase()) { return false }
  }
  return true
}

function histoMerge (a, b) {
  for (var word in b) {
    if (a.hasOwnProperty(word)) {
      a[word] += b[word]
    } else {
      a[word] = b[word]
    }
  }
  return a
}

function displayResultPage (wordHistogram) {
  // prepare variables
  const wordsFirstPage = wordHistogram.slice(0, 10)
  const wordsSecondPage = wordHistogram.slice(11, 21)
  const wordsThirdPage = wordHistogram.slice(22, 32)

  // prepare screen specific html
  const wordsDiv = $('#words')
  const html = `
    <p class="text_label"> Check out those juicy words! </p>
    <div id='words_list'> </div>
    <a href="#" class="next_page_link"> Next </a>
  `
  const nextPageLink = '<a href="#" class="next_page_link"> Next </a>'
  const prevPageLink = '<a href="#" class="prev_page_link"> Prev </a>'

  // display new screen
  $('#sources_screen').remove()
  wordsDiv.html(html)
  document.querySelector('#word_screen').style.display = 'block'

  // for page specific content/html
  displayFirstPage()

  function displayFirstPage () {
    const page = createResultPageHtml(wordsFirstPage)

    $('#words_list').html('')
    $('#words_list').html(page)

    const nextLink = document.querySelector('.next_page_link')
    const prevLink = document.querySelector('.prev_page_link')

    if (prevLink) {
      // user is coming from page 2
      nextLink.removeEventListener('click', displayThirdPage)
      $('.prev_page_link').remove()
    }
    nextLink.addEventListener('click', displaySecondPage)
  }

  function displaySecondPage (event) {
    const page = createResultPageHtml(wordsSecondPage)

    $('#words_list').html('')
    $('#words_list').html(page)

    const nextLink = document.querySelector('.next_page_link')
    const prevLink = document.querySelector('.prev_page_link')

    if (nextLink) {
      // user is coming from first page
      nextLink.removeEventListener('click', displaySecondPage)
      nextLink.addEventListener('click', displayThirdPage)

      $('.next_page_link').before(prevPageLink)
      document.querySelector('.prev_page_link').addEventListener('click', displayFirstPage)
    } else {
      // user is coming from third page
      $('.prev_page_link').before(nextPageLink)
      document.querySelector('.next_page_link').addEventListener('click', displayThirdPage)

      prevLink.removeEventListener('click', displaySecondPage)
      prevLink.addEventListener('click', displayFirstPage)
    }
  }

  function displayThirdPage (event) {
    const page = createResultPageHtml(wordsThirdPage)

    $('#words_list').html('')
    $('#words_list').html(page)

    $('.next_page_link').remove()
    document.querySelector('.prev_page_link').removeEventListener('click', displayFirstPage)
    document.querySelector('.prev_page_link').addEventListener('click', displaySecondPage)
  }

  function createResultPageHtml(data) {
    return data.map(word => {
      return `
        <div class='words_list_entry'>
          <p> ${word[0]} (${word[1]})</p>
        </div>
      `
    }).join('')
  }
}
