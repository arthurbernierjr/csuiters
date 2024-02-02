const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/api', routes)
app.use(express.static('dist'))

module.exports = app