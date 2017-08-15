import { prepareSecondScreen } from './secondScreen'
import { handleEmptyInput } from './firstScreenHelper'

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
          handleEmptyInput()
        }
      }
    })
  }
}
