const express = require('express')
var rn = require('random-number');

const app = express()

app.get('/', (req, res) => {
  res.send({"msg": "welcome to random number generator"})
})
app.get('/random', (req, res) => {

  res.send({"random_number": rn( {
    min:  1
  , max:  1000
  , integer: true
  })  })
})

const port =  3002

app.listen(port, () => {
  console.log(`listening on port 3002`)
})