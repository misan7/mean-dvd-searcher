const rp = require('request-promise')
const cheerio = require('cheerio')

const URL_StarWars = 'https://www.filmaffinity.com/es/search.php?stype=title&stext=star%20wars'

let films = []

const db = require('../config/db.js')
const Dvd = require('../models/Dvd.js')

const DB_URI = 'mongodb://localhost:27017/test'
db.openUri(DB_URI)
console.log(`Connecting to ${DB_URI}...`)

rp(URL_StarWars).then(body => {

	const $ = cheerio.load(body)

	const $films = $('.se-it')

	$films.each( function(index, film) {

		let name = $(film).find('.mc-title a').text()

		let image = $(film).find('.mc-poster img').attr('src')

		let description = $(film).find('.nb a').attr('title')

		films.push({ name, description, image })

	})

	Dvd.create(films)
			.then( () => console.log('Films inserted properly '))
			.catch( () => console.log('There was an error inserting films'))

})