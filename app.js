const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Thirty Three Words')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
