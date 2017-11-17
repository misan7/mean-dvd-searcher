function HomeController($scope, ApiService) {

	$scope.showImage = (dvd) => {
		const id = dvd._id
		console.log("Element with id: " + id + " clicked")

		ApiService.getDvdById(id)
			.then( response => { 
				console.log("response", response);

				$scope.dvd = response.data
			})
	}

	ApiService.getAllDvds()
		.then( dvds => $scope.dvds = dvds )

}

module.exports = HomeController