const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesDvds = require('./routes/dvds')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname, '../client')))

app.use('/dvds', routesDvds)

module.exports = app