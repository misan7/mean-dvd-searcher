const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const routesDvds = require('./routes/dvds')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/dvds', routesDvds)

module.exports = app