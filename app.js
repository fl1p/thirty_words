const express = require('express')
const path = require('path')
const app = express()

/* Settings */
app.set('views', './views')
app.set('view engine', 'pug')

/* Declare static directory */
app.use(express.static(path.join(__dirname,'public')))

/* Router */
app.get('/', function (req, res) {
  console.log('Main')
  res.render('main.pug')
})

app.get('/search', function (req, res) {
  console.log('Search')
  res.render('search.pug')
})

app.get('/about', function (req, res) {
  console.log('About')
  res.render('about.pug')
})

/* Server */
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
