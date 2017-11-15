const express = require('express')
const router = express.Router()

const deleteDvd = require('./handlers/deleteDvd')
const updateDvd = require('./handlers/updateDvd')
const getDvd = require('./handlers/getDvd')

router.delete('/:id', deleteDvd)
router.put('/:id', updateDvd)
router.get('/:id', getDvd)

module.exports = router