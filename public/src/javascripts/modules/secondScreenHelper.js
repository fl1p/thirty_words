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
    if ($('.sources_list_entry.active').length > 1) {
      $('.sources_list_entry').not('.active').each(function () {
        $(this).addClass('dissolve')
      })
      setTimeout(function () {
        callback(term)
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

// make sources selectable
function clickSource (event) {
  const source = $(event.target.parentNode)
  !source.hasClass('active') ?
    source.addClass('active') :
    source.removeClass('active')
}

export const createSourcesListHtml = function (titles) {
  const top = "<div id='sources_list'>"
  const middle = titles.map((title) => createHtmlForSource(title))
                       .join('')
  const bottom = '</div> <input id="sources_link" class="nav_link" type="submit" value="Find words">'
  return top.concat(middle).concat(bottom)
}

function createHtmlForSource (title) {
  return `
    <div class='sources_list_entry'>
      <p> ${title} </p>
    </div>
  `
}

export const displaySecondScreen = function (html) {
  $('#search_screen').remove()
  $('#sources_form').html(html)
  $('#sources_screen').css('display', 'block')
}
