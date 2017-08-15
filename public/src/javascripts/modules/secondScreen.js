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
      const html = response.data[1].map((source, i) => {
        return `
          <div class='sources_list_entry'>
            <p> ${source} </p>
          </div>
        `
      }).join('')

      const top = "<div id='sources_list'>"
      const bottom = '</div> <input id="sources_link" class="nav_link" type="submit" value="Find words">'
      const finalHtml = top.concat(html).concat(bottom)

      // display next sources screen
      document.querySelector('#search_screen').remove()
      document.querySelector('#sources_form').innerHTML = finalHtml
      document.querySelector('#sources_screen').style.display = 'block'

      secondScreenHelper.makeSourcesSelectable()
      secondScreenHelper.setSubmitListener(term, prepareThirdScreen)
    })
    .catch(function (error) {
      // TODO
      // think of appropriate error handling
      console.log(error)
    })
}
