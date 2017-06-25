const express = require('express')
const app = express()

/* Settings */
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  console.log('*')
  res.render('main.pug')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
