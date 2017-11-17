function routesConfig($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'HomeController'
        })
        .when('/addDvd', {
          templateUrl: '/templates/addDvdPanel.html',
        })

  }

module.exports = routesConfig