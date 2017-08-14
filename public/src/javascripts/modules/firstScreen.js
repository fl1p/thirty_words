import { prepareSecondScreen } from './secondScreen'

export const showFirstScreen = function () {
  // reset focus to input when user closes modal
  $('#searchHelpModal').on('hidden.bs.modal', function () {
    $('#search_input').focus()
  })

  // handle submit
  const input = document.querySelector('#search_input')
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        if (input.value) {
          e.preventDefault()
          prepareSecondScreen()
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
}
