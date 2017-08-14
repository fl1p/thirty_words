import * as axios from 'axios'
const wordFilter = require('../../../../data/wordFilter.json')
import * as thirdScreenHelper from './thirdScreenHelper'

// get words

export const prepareThirdScreen = function (term) {
  let selectedSources = []
  const sources = document.querySelectorAll('.sources_list_entry.active')
  for (var i = sources.length; i--; selectedSources.unshift(sources[i]));

  const urls = selectedSources
    .map(function (node) { return encodeURI(node.textContent.trim()) })
    .map(function (title) { return thirdScreenHelper.createWikiUrl(title) })

  let promiseArray = urls.map(url => axios.get(url))
  axios.all(promiseArray)
  .then(function (response) {
    let finalWords = (
      response.map(source => thirdScreenHelper.parseWikiMarkup(source))
              .filter(thirdScreenHelper.deleteMetaPages)
              .map(page => thirdScreenHelper.createWordsObject(page, term))
              .reduce(thirdScreenHelper.mergeWordObjects, {})
    )

    const sortedWords = thirdScreenHelper.sortWords(finalWords)
    displayResultPage(sortedWords)
  })
}

function displayResultPage (sortedWords) {
  // prepare variables
  const wordsFirstPage = sortedWords.slice(0, 10)
  const wordsSecondPage = sortedWords.slice(11, 21)
  const wordsThirdPage = sortedWords.slice(22, 32)

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
