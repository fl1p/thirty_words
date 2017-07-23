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
        const html = res.data[1].map((source, i) => {
          const name = `source_${i}`
          return `
            <div class='sources_list_entry'>
              <label for=${name}> ${source} </label>
              <input type='checkbox' id=${name}>
            </div>
          `
        }).join('')

        const finalHtml = html.concat('<input id="searchWords" class="button" type="submit" value="Go">')

        // (re-)move search form
        // TODO

        // display sources form with appended checkboxes
        document.querySelector('#searchInput').blur()
        document.querySelector('#sourcesForm').innerHTML = finalHtml
        document.querySelector('#sourcesForm').style.display = 'block'
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})
