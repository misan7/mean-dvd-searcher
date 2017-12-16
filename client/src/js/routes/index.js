const angular = require('angular')
const angularRoute = require("angular-route");

const configRouteHome = require('./home')
const HomeController = require('./home/HomeController')

const configRouteAdd = require('./addFilm')
const AddController = require('./addFilm/AddController')


angular.module('filmAppRoutes', [ angularRoute])

  // Route /
  .controller('HomeController', HomeController)
  .config( configRouteHome )

  // Route /addFilm
  .controller('AddController', AddController)
  .config( configRouteAdd )

module.exports = 'filmAppRoutes'