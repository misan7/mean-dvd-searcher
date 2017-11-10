function MainController($scope, ApiService) {

	ApiService.getAllDvds()
		.then( dvds => $scope.dvds = dvds )
}

module.exports = MainController