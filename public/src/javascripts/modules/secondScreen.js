import { prepareThirdScreen } from './thirdScreen'
import * as secondScreenHelper from './secondScreenHelper'
import * as axios from 'axios'

// search wiki for sources based on user input
export const prepareSecondScreen = function () {
  const term = document.querySelector('#search_input').value

  const url = `https://en.wikipedia.org/w/api.php`
  const params = {
    action: 'opensearch',
    search: term,
    limit: 10,
    namespace: 0,
    origin: '*',
    format: 'json'
  }

  axios.get(url, {params})
    .then(function (response) {
      const sourcesListHtml = secondScreenHelper.createSourcesListHtml(response.data[1])

      // display next sources screen
      secondScreenHelper.displaySecondScreen(sourcesListHtml)
      secondScreenHelper.makeSourcesSelectable()
      secondScreenHelper.setSubmitListener(term, prepareThirdScreen)
    })
    .catch(function (error) {
      // TODO
      // think of appropriate error handling
      console.log(error)
    })
}
