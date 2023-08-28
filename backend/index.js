const {connectToMongo} = require("./db");
const express = require('express')
const app = express()
const port = 3000

connectToMongo();


app.get('/', (req, res) => {
  res.send('Hello Loosers!')
})

app.listen(port, () => {
  console.log(`App listening at http://127.0.0.1:${port}`)
})