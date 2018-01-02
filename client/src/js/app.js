const angular = require('angular')

const runAtBegin = require('./run')
const ApiService = require('./services/ApiService')
const routesApp = require('./routes')

angular.module('dvdApp', [routesApp])
	.factory('ApiService', ApiService)
	.run( runAtBegin )
