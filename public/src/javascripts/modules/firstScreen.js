import { prepareSecondScreen } from './secondScreen'
import { handleEmptyInput } from './firstScreenHelper'
import { adaptFontSize } from './firstScreenHelper'

export const showFirstScreen = function () {
  // reset focus to input when user closes modal
  $('#searchHelpModal').on('hidden.bs.modal', () => {
    $('#search_input').focus()
  })

  // handle submit & typing
  const input = document.querySelector('#search_input')
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        // submit
        e.preventDefault()
        if (input.value) {
          prepareSecondScreen()
        } else {
          handleEmptyInput()
        }
      } else {
        // user is typing
        adaptFontSize()
      }
    })
  }
}
