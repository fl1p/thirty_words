$(document).ready(function () {
  console.log('Test')

  // SEARCH SOURCES

  // set up event listener to detect user input
  const input = document.querySelector('#searchInput')
  let timer
  const waitInterval = 2000

  input.addEventListener('keyup', function () {
    clearTimeout(timer)
    timer = setTimeout(searchSources, waitInterval)
  })

  // TODO somehow two calls to the wiki api are made instead of just one
  input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      searchSources()
    } else {
      clearTimeout(timer)
    }
  })
})
