const express = require('express')
const router = express.Router()

const addDvd = require('./handlers/addDvd.js')
const getAll = require('./handlers/getAllDvd.js')

router.post('/', addDvd)
router.get('/', getAll)

module.exports = router