$(document).ready(function () {
  // SEARCH SOURCES

  // set up event listener to detect user input
  const input = document.querySelector('#searchInput')
  if (input) {
    let timer
    const waitInterval = 2000

    input.addEventListener('keyup', function () {
      clearTimeout(timer)
      timer = setTimeout(searchSources, waitInterval)
    })

    // TODO somehow this creates two calls to the wiki api instead of just one
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        searchSources()
      } else {
        clearTimeout(timer)
      }
    })
  }
})
