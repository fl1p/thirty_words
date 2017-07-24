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

  function clickSource (event) {
    const element = event.target
    if (element.className === '') {
      element.className = 'active'
    } else if (element.className === 'active') {
      element.className = ''
    }
  }

  function addListenersToListEntries () {
    const list = document.querySelectorAll('.sources_list_entry')
    for (var item of list) {
      item.addEventListener('click', clickSource)
    }
  }

  // search sources based on user input
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
          return `
            <hr>
            <div class='sources_list_entry'>
              <p> ${source} </p>
            </div>
          `
        }).join('').concat('<hr>')

        const top = "<div id='sources_list'>"
        const bottom = '<input id="sources_submit_button" class="button btn btn-lg btn-default" type="submit" value="Find words"> </div>'
        const finalHtml = top.concat(html).concat(bottom)

        // TODO (re-)move / animate search form

        // display next 'screen'
        document.querySelector('#searchInput').blur()
        document.querySelector('#sources_label').style.display = 'block'
        document.querySelector('#sourcesForm').innerHTML = finalHtml
        document.querySelector('#sourcesForm').style.display = 'block'

        addListenersToListEntries()

      })
      .catch(function (error) {
        // TODO
        // think of appropriate error handling
        console.log(error)
      })
  }
})
