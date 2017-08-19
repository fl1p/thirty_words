import { prepareSecondScreen } from './secondScreen'
import { handleEmptyInput } from './firstScreenHelper'
import { adaptFontSize } from './firstScreenHelper'
import { checkSources } from './firstScreenHelper'
import { showErrorMessage } from './firstScreenHelper'


export const showFirstScreen = function () {
  // reset focus to input when user closes modal
  $('#searchHelpModal').on('hidden.bs.modal', () => {
    $('#search_input').focus()
  })

  const input = document.querySelector('#search_input')
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        // submit
        e.preventDefault()
        if (input.value) {
          checkSources(input.value,
            prepareSecondScreen,
            showErrorMessage
          )
        } else {
          showErrorMessage('Enter a search term to continue!')
        }
      } else {
        // user is typing
        adaptFontSize()
      }
    })
  }
}
