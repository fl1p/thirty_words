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
