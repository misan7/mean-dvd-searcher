const angular = require('angular')
const angularRoute = require('angular-route')

const MainController = require('./controllers/MainController.js')
const ApiService = require('./services/ApiService.js')

angular.module('dvdApp', [angularRoute])
	.controller('MainController', MainController)
	.factory('ApiService', ApiService)
	.config($routeProvider => {

		$routeProvider
			.when('/', {
				templateUrl: 'templates/home.html',
				controller: 'MainController'
			})
	})