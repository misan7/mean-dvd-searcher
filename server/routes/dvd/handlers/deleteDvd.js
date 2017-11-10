const Dvd = require( __base + 'models/Dvd')

function removeDvd (req, res) {

	const {id} = req.params
	
	Dvd.findByIdAndRemove( id )
		.then( () => res.status(200).json({ msg: `Dvd w/ id: ${id} removed properly`}))
		.catch( () => res.status(500).json({ msg: `Error removing Dvd w/ id: ${id}`}))
}

module.exports = removeDvd