$(document).ready(function () {
  console.log('Test')

  const input = document.querySelector('#searchInput')
  let timer
  const waitInterval = 2000

  input.addEventListener('keyup', function () {
    clearTimeout(timer)
    timer = setTimeout(searchSources, waitInterval)
  })

  input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      searchSources()
    } else {
      clearTimeout(timer)
    }
  })

  function searchSources () {
    const term = document.querySelector('#searchInput').value
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
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})
