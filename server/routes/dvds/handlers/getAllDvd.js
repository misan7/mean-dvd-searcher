const Dvd = require( __base + 'models/Dvd')

function getAll( req, res ) {

	Dvd.find()
		.then( dvds => res.json(dvds) )
}

module.exports = getAll