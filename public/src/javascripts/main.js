import { searchSources } from './modules/words'

$(document).ready(function () {
  // SEARCH SOURCES

  // set up event listener to detect user input
  const input = document.querySelector('#search_input')
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        searchSources()
      }
    })
  }
})
