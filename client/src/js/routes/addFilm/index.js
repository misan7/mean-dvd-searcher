var fs = require('fs')
var htmlAddDvd = fs.readFileSync(__dirname + '/template.html', 'utf8')

function configRoutes($routeProvider) {
	$routeProvider
		.when('/addDvd', {
			template: htmlAddDvd,
			controller: 'AddController'
		})

}

module.exports = configRoutes
