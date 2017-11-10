const Dvd = require( __base + 'models/Dvd')

function updateDvd (req, res) {
	const {id} = req.params
	const {name, description, availability, image} = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (description) dataToUpdate.description = description
	if (availability) dataToUpdate.availability = availability
	if (image) dataToUpdate.image = image

	Dvd.findByIdAndUpdate(id, dataToUpdate)
		.then( () => res.status(200).json({ msg: `Dvd data w/ id ${id} updated properly`}))
		.catch( () => res.status(500).json({ msg: `error updating Dvd data w/ id ${id} `}))
}

module.exports = updateDvd