const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path: './.env'
})

const port = 8000
const app = express()

app.get('/lol', (req, res) => {
  // flash messages - survives only a round trip
  res.send('urboi')

})

app.use('/products', require('./routes/productRouter.js'))


app.listen(port, () => console.log('Server running at http://localhost:' + port))