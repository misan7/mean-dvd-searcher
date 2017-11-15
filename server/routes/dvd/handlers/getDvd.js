const Dvd = require( __base + 'models/Dvd')

function getDvd( req, res ) {
    const id = req.params.id

    Dvd.findById(id)
        .then(Dvd => {
            res.json(Dvd)
        })
}

module.exports = getDvd
