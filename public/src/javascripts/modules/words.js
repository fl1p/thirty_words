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
          <hr>
          <div class='sources_list_entry'>
            <p> ${source} </p>
          </div>
        `
      }).join('').concat('<hr>')

      const top = "<div id='sources_list'>"
      const bottom = '</div> <input id="sources_submit_button" class="button btn btn-lg btn-default" type="submit" value="Find words"> '
      const finalHtml = top.concat(html).concat(bottom)

      // TODO (re-)move / animate search form

      // display next 'screen'
      document.querySelector('#search_input').blur()
      document.querySelector('#sources_label').style.display = 'block'
      document.querySelector('#sources_form').innerHTML = finalHtml
      document.querySelector('#sources_form').style.display = 'block'

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

    presentResults(sortedWords)
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

function presentResults (wordHistogram) {
  // we only need the first 30 words
  const words = wordHistogram.slice(0, 29)

  // remove submit button of previous screen
  const submit = document.querySelector('#sources_submit_button')
  submit.parentNode.removeChild(submit)

  // get the container div that already exists in the layout
  const wordsDiv = $('#words')
  // create new html
  const header = "<p class='text_label'> Check out those juicy words! <p>"
  const tableTop = "<div id='words_list'>"
  const tableBody = words.map(word => {
    return `
      <hr>
      <div class='words_list_entry'>
        <p> ${word[0]} (${word[1]})</p>
      </div>
    `
  }).join('').concat('<hr>')
  const tableBottom = '</div>'

  const html = header.concat(tableTop).concat(tableBody).concat(tableBottom)

  wordsDiv.html(html)
}
