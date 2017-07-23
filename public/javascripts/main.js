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
            <hr>
            <div class='sources_list_entry'>
              <p class='inactive'> ${source} </p>
            </div>

          `
        }).join('').concat('<hr>')

        const top = "<div id='sources_list'>"
        const bottom = '<input id="sources_submit_button" class="button" type="submit" value="Go"> </div>'
        const finalHtml = top.concat(html).concat(bottom)

        // (re-)move search form
        // TODO

        // display next 'screen'
        document.querySelector('#searchInput').blur()
        document.querySelector('#sources_label').style.display = 'block'
        document.querySelector('#sourcesForm').innerHTML = finalHtml
        document.querySelector('#sourcesForm').style.display = 'block'
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})
