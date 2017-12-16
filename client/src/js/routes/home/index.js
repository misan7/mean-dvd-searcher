function configRoutes($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/home.html',
			controller: 'HomeController'
		})

}

module.exports = configRoutes