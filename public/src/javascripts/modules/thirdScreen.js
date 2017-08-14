import * as axios from 'axios'
import * as wtfWikipedia from 'wtf_wikipedia'
const wordFilter = require('../../../../data/wordFilter.json')

export const prepareThirdScreen = function (term) {
  // get all list entries with class active into array
  let selectedSources = []
  const sources = document.querySelectorAll('.sources_list_entry.active')
  for (var i = sources.length; i--; selectedSources.unshift(sources[i]));

  // // creates a wikimedia url for a given page title
  // function createUrl(title)

  const urls = selectedSources.map(function (node) { return encodeURI(node.textContent.trim()) })
                              .map(function (title) {
                                const url = 'https://en.wikipedia.org/w/api.php'
                                const query = `?action=query&titles=${title}&prop=revisions&rvprop=content&format=json&origin=*`
                                return url.concat(query)
                              })

  let promiseArray = urls.map(url => axios.get(url))
  axios.all(promiseArray)
  .then(function (response) {
    let finalWords = (
      response.map(source => parseWikiMarkup(source))
              .filter(deleteMetaPages)
              .map(page => createWordsObject(page, term))
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

    // Function definitions for searchWords()



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
    function createWordsObject (page, term) {

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
                                    .filter(removeSearchTerm, term)
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

      // Function definitions for createWordsObject

      function removeNonDomainWords (word) {
        const nonDomainWords = wordFilter.filterWords
        for (let i = 0; i < nonDomainWords.length; i++) {
          if (word.toLowerCase() === nonDomainWords[i].toLowerCase()) { return false }
        }
        return true
      }

      function removeWordsWithDigits (word) {
        return !(/.*\d+.*/.test(word))
      }

      function removeWordsWithInsideNonWordChars (word) {
        return !(/\w+[\W_]+\w+/.test(word))
      }

      // TODO not working! why?
      function removeEmptyWords (word) {
        return !(word === ' ')
      }

      function replaceNonWordCharsFromStartAndEnd (word) {
        return word.replace(/[\W_]+/g, '')
      }

      function removeSearchTerm (word) {
        return !(word.toLowerCase() == term.toLowerCase())
      }
    }

    function mergeWordObjects (words, source) {
      const newWords = histoMerge(words, source)
      return newWords
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
        <a href="#" id="next_page_link" class="nav_link"> Next </a>
      `
      const nextPageLink = '<a href="#" id="next_page_link" class="nav_link"> Next </a>'
      const prevPageLink = '<a href="#" id="prev_page_link" class="nav_link"> Prev </a>'

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

        const nextLink = document.querySelector('#next_page_link')
        const prevLink = document.querySelector('#prev_page_link')

        if (prevLink) {
          // user is coming from page 2
          nextLink.removeEventListener('click', displayThirdPage)
          $('#prev_page_link').remove()
        }
        nextLink.addEventListener('click', displaySecondPage)
      }

      function displaySecondPage (event) {
        const page = createResultPageHtml(wordsSecondPage)

        $('#words_list').html('')
        $('#words_list').html(page)

        const nextLink = document.querySelector('#next_page_link')
        const prevLink = document.querySelector('#prev_page_link')

        if (nextLink) {
          // user is coming from first page
          nextLink.removeEventListener('click', displaySecondPage)
          nextLink.addEventListener('click', displayThirdPage)

          $('#next_page_link').before(prevPageLink)
          document.querySelector('#prev_page_link').addEventListener('click', displayFirstPage)
        } else {
          // user is coming from third page
          $('#prev_page_link').after(nextPageLink)
          document.querySelector('#next_page_link').addEventListener('click', displayThirdPage)

          prevLink.removeEventListener('click', displaySecondPage)
          prevLink.addEventListener('click', displayFirstPage)
        }
      }

      function displayThirdPage (event) {
        const page = createResultPageHtml(wordsThirdPage)

        $('#words_list').html('')
        $('#words_list').html(page)

        $('#next_page_link').remove()
        document.querySelector('#prev_page_link').removeEventListener('click', displayFirstPage)
        document.querySelector('#prev_page_link').addEventListener('click', displaySecondPage)
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
  })
}