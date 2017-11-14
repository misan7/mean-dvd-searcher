function routesConfig($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'MainController'
        })

  }

module.exports = routesConfig