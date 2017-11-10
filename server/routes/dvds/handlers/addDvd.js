const Dvd = require( __base + 'models/Dvd')

function addDvd( req, res ) {

	const { name, description, availability, image } = req.body
	const dvd = new Dvd({ name, description, availability, image })
	dvd.save()
		.then( () => res.status(200).json({ msg: 'dvd inserted properly'}))
		.catch( () => res.status(500).json({ msg: 'error saving dvd'}))
}

module.exports = addDvd