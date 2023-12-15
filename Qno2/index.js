const express = require('express')

const app = express()
let counter=0
app.get('/', (req, res) => {
  res.send({"counter": counter})
})
app.get('/increment', (req, res) => {
    counter=counter+1;
  res.send({"counter": counter})
})
app.get('/decrement', (req, res) => {
    counter=counter-1;
  res.send({"counter": counter})
})

const port =  3000

app.listen(port, () => {
  console.log(`listening on port 3000`)
})