export const handleEmptyInput = function () {
  // display hint if it does not exist
  if (document.querySelector('#search_hint')) {
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

export function adaptFontSize () {
  // copy text input into hidden div
  $('#hidden_helper_div').text($('#search_input').val())
  // get div width => width of input
  const inputWidth = $('#hidden_helper_div').width()
  const wrapperWidth = $('#search_screen').width()

  if (inputWidth > wrapperWidth - 50) {
    const newFontSize = decreaseFontSize()

    $('#search_input').css('font-size', newFontSize)
    $('#hidden_helper_div').css('font-size', newFontSize)
    adaptFontSize()
  }
}

function decreaseFontSize () {
  const oldFontSize = parseInt($('#search_input').css('font-size').slice(0,-2))
  const newFontSize = (oldFontSize - (oldFontSize / 20))

  return newFontSize.toString() + 'px'
}
