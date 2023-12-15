const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({"msg": "hello i am home page"})
})
app.get('/about', (req, res) => {

  res.send({"msg": "hello i am about page"})
})
app.get('/contact', (req, res) => {
    
  res.send({"email": "support@pwskills.com"})
})

const port =  3001

app.listen(port, () => {
  console.log(`listening on port 3001`)
})