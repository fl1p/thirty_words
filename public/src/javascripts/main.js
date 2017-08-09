import { searchSources } from './modules/words'

$(document).ready(function () {
  // SEARCH SOURCES

  // set up event listener to detect user input
  const input = document.querySelector('#search_input')
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        if (input.value) {
          e.preventDefault()
          searchSources()
        } else {
          e.preventDefault()
          // display hint if it does not exist
          if (document.querySelector('#search_hint')) {
            console.log('animating hint..not')

              $('#search_hint').removeClass('make_vizible').addClass('invizible')
              setTimeout(function() {
                $('#search_hint').removeClass('invizible').addClass('make_vizible');
              },600);
          // animate existing hint to catch users attention
          } else {
            const searchHint = `
              <h3 id="search_hint" class="invizible">
                Enter a search term to continue!
              </h3>
            `
            $('#search_label').append(searchHint)
            setTimeout(function() {
              $('#search_hint').removeClass('invizible').addClass('make_vizible');
            },0);
          }
        }
      }
    })
  }

  // reset focus to input after modal was closed
  $('#searchHelpModal').on('hidden.bs.modal', function () {
    $('#search_input').focus()
  })
})
