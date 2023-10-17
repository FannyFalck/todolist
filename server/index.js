const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/task', function (req, res) {
  res.json({"task" : "Fanny" })
})

app.listen(3000)


