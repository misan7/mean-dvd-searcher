const angular = require('angular')
const angularRoute = require('angular-route')

const HomeController = require('./controllers/HomeController.js')
const AddController = require('./controllers/AddController.js')

const ApiService = require('./services/ApiService.js')
const routesConfig = require('./config/routes.js')

angular.module('dvdApp', [angularRoute])
	.factory('ApiService', ApiService)
	.controller('HomeController', HomeController)
	.controller('AddController', AddController)
	.config( routesConfig )