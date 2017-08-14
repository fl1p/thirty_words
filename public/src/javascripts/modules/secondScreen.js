import { prepareThirdScreen } from './thirdScreen'
import * as axios from 'axios'

function addListenersToSourcesForm (term) {
  // make sources clickable
  function clickSource (event) {
    const source = $(event.target.parentNode)
    if (!source.hasClass('active')) {
      source.addClass('active')
    } else {
      source.removeClass('active')
    }
  }

  const list = document.querySelectorAll('.sources_list_entry')
  for (var item of list) {
    item.addEventListener('click', clickSource)
  }

  let nothingSelectedCounter = 0

  // set up submit listener
  document.querySelector('#sources_form').addEventListener('submit', function (e) {
    e.preventDefault()
    if ($('.sources_list_entry.active').length > 1) {
      $('.sources_list_entry').not('.active').each(function () {
        $(this).addClass('dissolve')
      })
      setTimeout(function () {
        prepareThirdScreen(term)
      },1000)
    } else {
      nothingSelectedCounter += 1
      switch(nothingSelectedCounter) {
        case 2:
            $('#sources_label').text('Dude, at least try!')
            break;
        case 3:
            $('#sources_label').text('We still believe in you!')
            break;
        default:
            $('#sources_label').text('Select at least one source!!')
      }
    }
  })
}

// search sources based on user input
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
    .then(function (res) {
      const html = res.data[1].map((source, i) => {
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

      addListenersToSourcesForm(term)
    })
    .catch(function (error) {
      // TODO
      // think of appropriate error handling
      console.log(error)
    })
}
