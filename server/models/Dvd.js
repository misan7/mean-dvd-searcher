const mongoose = require('mongoose')
const collection = 'dvds'

const DvdSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	availability: Boolean,
	image: String

}, { collection })

module.exports = mongoose.model('Dvd', DvdSchema)