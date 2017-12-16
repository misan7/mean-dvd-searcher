const angular = require('angular')

const ApiService = require('./services/ApiService.js')
const routesApp = require('./routes')

angular.module('dvdApp', [routesApp])
	.factory('ApiService', ApiService)