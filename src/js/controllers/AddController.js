function AddController($scope, $rootScope, ApiService ) {

	$rootScope.section = "add"

	$scope.addDvd = function() {

		const {name, description, availability, image} = $scope

		ApiService.addDvd({name, description, availability, image})

	}

}

module.exports = AddController
