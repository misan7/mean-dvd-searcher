var fs = require('fs')
var htmlHome = fs.readFileSync(__dirname + '/template.html', 'utf8')

function configRoutes($routeProvider) {
	$routeProvider
		.when('/', {
			template: htmlHome,
			controller: 'HomeController'
		})

}

module.exports = configRoutes
