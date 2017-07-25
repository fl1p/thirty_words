// STEP 1 - SOURCES

function clickSource (event) {
  const element = event.target
  if (element.className === '') {
    element.className = 'active'
  } else if (element.className === 'active') {
    element.className = ''
  }
}

function addListenersToSourcesForm () {
  const list = document.querySelectorAll('.sources_list_entry')
  for (var item of list) {
    item.addEventListener('click', clickSource)
  }

  document.querySelector('#sourcesForm').addEventListener('submit', function (e) {
    e.preventDefault()
    searchWords()
  })
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
      const bottom = '</div> <input id="sources_submit_button" class="button btn btn-lg btn-default" type="submit" value="Find words"> '
      const finalHtml = top.concat(html).concat(bottom)

      // TODO (re-)move / animate search form

      // display next 'screen'
      document.querySelector('#searchInput').blur()
      document.querySelector('#sources_label').style.display = 'block'
      document.querySelector('#sourcesForm').innerHTML = finalHtml
      document.querySelector('#sourcesForm').style.display = 'block'

      addListenersToSourcesForm()
    })
    .catch(function (error) {
      // TODO
      // think of appropriate error handling
      console.log(error)
    })
}

// STEP 2: Words

function searchWords () {
  console.log('Searhing words---')

  // get all list entries with class active into array
  let selectedSources = []
  const sources = document.querySelectorAll('.sources_list_entry .active')
  for (var i = sources.length; i--; selectedSources.unshift(sources[i]));

  const urls = selectedSources.map(function (node) { return encodeURI(node.textContent.trim()) })
                              .map(function (title) { return url(title) })

  let promiseArray = urls.map(url => axios.get(url))
  axios.all(promiseArray)
  .then(function (response) {
    console.log(response)
  })
  console.log(urls)
}

// creates a wikimedia url for a given page title
function url (title) {
  const url = 'https://en.wikipedia.org/w/api.php'
  const query = `?action=query&titles=${title}&prop=revisions&rvprop=content&format=json&origin=*`
  return url.concat(query)
}
