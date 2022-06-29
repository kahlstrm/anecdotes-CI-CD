require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const apiRouter = require('./api/router')
const app = express()
const PORT = process.env.PORT | 5000
// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV)
const mongo_URL =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGODB_URI_TEST
    : process.env.MONGODB_URI
// eslint-disable-next-line no-console
console.log('connecting to mongoDB')
mongoose.connect(mongo_URL)
app.use(express.json())
app.use('/api', apiRouter)
app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('build'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port ' + PORT)
})
