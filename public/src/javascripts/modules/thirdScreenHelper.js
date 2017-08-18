import * as wtfWikipedia from 'wtf_wikipedia'
import * as thirdScreenHelper from './thirdScreenHelper'
const wordFilter = require('../../../../data/wordFilter.json')

// for get words section:
export function getArrayOfSelectedSources () {
  let selectedSources = []
  const sources = document.querySelectorAll('.sources_list_entry.active')
  for (var i = sources.length; i--; selectedSources.unshift(sources[i]));

  return selectedSources
}

export function createWikiUrl (title) {
  const url = 'https://en.wikipedia.org/w/api.php'
  const query = `?action=query&titles=${title}&prop=revisions&rvprop=content&format=json&origin=*`

  return url.concat(query)
}

// parses a single wikipedia page
export function parseWikiMarkup (source) {
  const page = source.data.query.pages
  let words

  for (var propName in page) {
    const wikiPage = page[propName].revisions['0']['*']
    words = wtfWikipedia.parse(wikiPage)
  }
  return words
}

// returns false for meta pages, so they will be filtered out
export function deleteMetaPages (page) {
  if (page.type !== 'page') {
    console.log('Page filtered: ' + page.type)
  }
  return (page.type === 'page')
}

// creates the words object for a single page
export function createWordsObject (page, term) {
  // transform page response sections into word arrays
  // each section ends up as an array of its words
  // TODO for now we are only using sections but there is more text
  // check the page object to fiond out more
  const wordArrays = []

  page.sections.forEach(function (section) {
    section.sentences.forEach(function (sentence) {
      let rawArray = sentence.text.split(' ')
      const wordArray = rawArray.filter(aggregateFilter)
                                .filter(removeSearchTerm, term)
                                .map(word => replaceNonWordCharsFromStartAndEnd(word))

      wordArrays.push(wordArray)
    })
  })

  // create the words object/histogram which holds the
  // counts of each word of every word array
  return createHistogram()

  // Function definitions for createWordsObject
  // *
  // *
  function createHistogram () {
    const words = {}
    wordArrays.forEach(function (wordArray) {
      wordArray.forEach(function (word) {
        words.hasOwnProperty(word) ? words[word] += 1 : words[word] = 1
      })
    })
    return words
  }

  function aggregateFilter (word, term) {
    return  ( removeNonDomainWords(word) &&
              removeWordsWithDigits(word) &&
              removeWordsWithInsideNonWordChars(word) &&
              removeEmptyWords(word)
            )
  }

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

  function removeSearchTerm (word) {
    return !(word.toLowerCase() == term.toLowerCase())
  }

  function replaceNonWordCharsFromStartAndEnd (word) {
    return word.replace(/[\W_]+/g, '')
  }

}

export function mergeWordObjects (words, source) {
  for (var word in source) {
    words.hasOwnProperty(word) ?
    words[word] += source[word] :
    words[word] = source[word]
  }
  return words
}

export function sortWords (finalWords) {
  // Sort histogram
  let sortedWords = []
  for (var word in finalWords) {
    sortedWords.push([word, finalWords[word]])
  }

  sortedWords.sort(function (a, b) {
    return b[1] - a[1]
  })

  return sortedWords
}

// for display words section

export function resultPageHtml () {
  return `
    <p class="text_label"> Check out those juicy words! </p>
    <div id='words_list'> </div>
    <a href="#" id="next_page_link" class="nav_link"> Next </a>
  `
}

export function nextHtml () {
  return '<a href="#" id="next_page_link" class="nav_link"> Next </a>'
}

export function prevHtml () {
  return '<a href="#" id="prev_page_link" class="nav_link"> Prev </a>'
}

export function createWordListHtml(data) {
  return data.map(word => {
    return `
      <div class='words_list_entry'>
        <p> ${word[0]} (${word[1]})</p>
      </div>
    `
  }).join('')
}
