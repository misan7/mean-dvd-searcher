const angular = require('angular')
const MainController = require('./controllers/MainController.js')
// const ApiService = require('./services/ApiService.js')

angular.module('dvdApp', [])
	.controller('MainController', MainController)