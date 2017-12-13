function HomeController($scope, ApiService) {

	$scope.showImage = (dvd) => {
		const id = dvd._id
		console.log("Element with id: " + id + " clicked")

		ApiService.getDvdById(id)
			.then( response => { 
				toastr.info('I am your father')

				$scope.dvd = response.data
			})
	}

	ApiService.getAllDvds()
		.then( dvds => $scope.dvds = dvds )

	$scope.removeFilm = (id) => {

		ApiService.removeDvd(id)
			.then( response => {
				console.log("response", response);

			})
	}
}



module.exports = HomeController