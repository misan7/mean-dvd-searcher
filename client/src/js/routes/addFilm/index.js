function configRoutes($routeProvider) {
	$routeProvider
		.when('/addDvd', {
			templateUrl: '/templates/addDvdPanel.html',
			controller: 'AddController'
		})

}

module.exports = configRoutes