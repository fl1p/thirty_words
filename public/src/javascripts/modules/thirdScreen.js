import * as axios from 'axios'
const wordFilter = require('../../../../data/wordFilter.json')
import * as thirdScreenHelper from './thirdScreenHelper'

// get words

export const prepareThirdScreen = function (term, tries) {
  // create urls for wikipedia api calls from selected source list elements.
  // this is possible, as the value of the html element is the page title
  // needed for the api call

  const urls = thirdScreenHelper.getArrayOfSelectedSources()
    .map(node => encodeURI(node.textContent.trim()))
    .map(title => thirdScreenHelper.createWikiUrl(title))


  let promiseArray = urls.map(url => axios.get(url))

  axios.all(promiseArray)
  .then(response => {
    let finalWords = (
      response
        .map(source => thirdScreenHelper.parseWikiMarkup(source))
        .filter(thirdScreenHelper.deleteMetaPages)
        .map(page => thirdScreenHelper.createWordsObject(page, term))
        .reduce(thirdScreenHelper.mergeWordObjects, {})
    )

    const sortedWords = thirdScreenHelper.sortWords(finalWords)
    displayResultPage(sortedWords)
  })
  .catch(error => {
    if (tries < 3) {
      tries += 1
      console.log('An error occurred: ' + tries + '. of 3 tries')
      prepareThirdScreen(term, tries)
    } else {
      thirdScreenHelper.startFromScratch()
    }
  })
}

// display words

function displayResultPage (sortedWords) {
  const wordsFirstPage = sortedWords.slice(0, 10)
  const wordsSecondPage = sortedWords.slice(11, 21)
  const wordsThirdPage = sortedWords.slice(22, 32)

  const html = thirdScreenHelper.resultPageHtml
  const nextPageLink = thirdScreenHelper.nextHtml
  const prevPageLink = thirdScreenHelper.prevHtml

  // display new screen
  $('#sources_screen').remove()
  $('#words').html(html)
  $('#word_screen').css('display', 'block')

  // for page specific content/html
  displayFirstPage()

  function displayFirstPage () {
    const page = thirdScreenHelper.createWordListHtml(wordsFirstPage)

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
    const page = thirdScreenHelper.createWordListHtml(wordsSecondPage)

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
    const page = thirdScreenHelper.createWordListHtml(wordsThirdPage)

    $('#words_list').html('')
    $('#words_list').html(page)

    $('#next_page_link').remove()
    document.querySelector('#prev_page_link').removeEventListener('click', displayFirstPage)
    document.querySelector('#prev_page_link').addEventListener('click', displaySecondPage)
  }
}
