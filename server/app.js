const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesDvds = require('./routes/dvds')
const routesDvd = require('./routes/dvd')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname, '../client/public')))

app.use('/api/dvds', routesDvds)
app.use('/api/dvd', routesDvd)

module.exports = app