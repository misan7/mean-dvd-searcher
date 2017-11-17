const angular = require('angular')
const angularRoute = require('angular-route')

const HomeController = require('./controllers/HomeController.js')

const ApiService = require('./services/ApiService.js')
const routesConfig = require('./config/routes.js')

angular.module('dvdApp', [angularRoute])
	.controller('HomeController', HomeController)
	.factory('ApiService', ApiService)
	.config( routesConfig )