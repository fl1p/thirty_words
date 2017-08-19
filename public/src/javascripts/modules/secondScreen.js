import { prepareThirdScreen } from './thirdScreen'
import { createWikiUrl} from './thirdScreenHelper'
import * as secondScreenHelper from './secondScreenHelper'
import * as thirdScreenHelper from './thirdScreenHelper'
import * as axios from 'axios'

// search wiki for sources based on user input
export const prepareSecondScreen = function () {
  const term = $('#search_input').val()

  secondScreenHelper.getSources(term)
  .then(function (response) {
    const sources = response.data[1]
    const urls = sources
      .map(function (title) { return encodeURI(title) })
      .map(function (encTitle) { return createWikiUrl(encTitle) })

    // set up array of promises which requests wiki pages of all sources.
    // the returned page objects have a page type which we need to find meta pages
    let promiseArray = urls.map(url => axios.get(url))

    axios.all(promiseArray)
    .then(function (response) {
      let isMetaPageArray = response
        .map(source => thirdScreenHelper.parseWikiMarkup(source))
        .map(page => page.type)

      let sourcesHtml = ''
      // construct html for every page that is of type 'page'
      for (let i = 0; i < isMetaPageArray.length; i += 1) {
        if (isMetaPageArray[i] == 'page') {
          sourcesHtml += secondScreenHelper.createHtmlForSource(sources[i])
        }
      }
      const sourceslistHtml = secondScreenHelper.createSourcesListHtml(sourcesHtml)

      // display next sources screen
      secondScreenHelper.displaySecondScreen(sourceslistHtml)
      secondScreenHelper.makeSourcesSelectable()
      secondScreenHelper.setSubmitListener(term, prepareThirdScreen)
    })
  })
  .catch(function (error) {
    // TODO
    // think of appropriate error handling
    console.log(error)
  })
}
