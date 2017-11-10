const express = require('express')
const router = express.Router()

const deleteDvd = require('./handlers/deleteDvd')
const updateDvd = require('./handlers/updateDvd')

router.delete('/:id', deleteDvd)
router.put('/:id', updateDvd)

module.exports = router