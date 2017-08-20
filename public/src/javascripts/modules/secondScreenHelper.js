import * as axios from 'axios'

export const makeSourcesSelectable = function () {
  const list = document.querySelectorAll('.sources_list_entry')
  for (var item of list) {
    item.addEventListener('click', clickSource)
  }
}

export const setSubmitListener = function (term, callback) {
  let nothingSelectedCounter = 0

  document.querySelector('#sources_form').addEventListener('submit', function (e) {
    e.preventDefault()
    if ($('.sources_list_entry.active').length > 0) {
      $('.sources_list_entry').not('.active').each(function () {
        $(this).addClass('dissolve')
      })
      setTimeout(function () {
        callback(term, 0)
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

export function getSources (term) {
  const url = `https://en.wikipedia.org/w/api.php`
  const params = {
    action: 'opensearch',
    search: term,
    limit: 10,
    namespace: 0,
    origin: '*',
    format: 'json'
  }

  return axios.get(url, {params})
}

// make sources selectable
function clickSource (event) {
  const source = $(event.target.parentNode)
  !source.hasClass('active') ?
    source.addClass('active') :
    source.removeClass('active')
}

export const createSourcesListHtml = function (sourcesHtml) {
  const top = "<div id='sources_list'>"
  const bottom = '</div> <input id="sources_link" class="nav_link" type="submit" value="Find words">'
  return top.concat(sourcesHtml).concat(bottom)
}

export const createHtmlForSource = function (title) {
  return `
    <div class='sources_list_entry'>
      <p> ${title} </p>
    </div>
  `
}

export const displaySecondScreen = function (html) {
  $('#search_screen').css('display', 'none')
  $('#sources_form').html(html)
  $('#sources_screen').css('display', 'block')
}
