const express = require('express')
const router = express.Router()

const deleteDvd = require('./handlers/deleteDvd')

router.delete('/:id', deleteDvd)

module.exports = router