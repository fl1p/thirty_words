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
  console.log('*')
  res.render('main.pug')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
