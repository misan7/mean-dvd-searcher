function HomeController( $scope, ApiService ) {

	ApiService.getAllDvds()
		.then( dvds => $scope.dvds = dvds )

	$scope.showImage = (dvd) => {
		const id = dvd._id

		ApiService.getDvdById(id)
			.then( response => { 
				$scope.dvd = response.data
			})
	}

	$scope.removeFilm = (id) => {

		ApiService.removeDvd(id)
			.then( response => {
				toastr.info('DVD deleted from the list')

			})
			.catch( error => {
				toastr.error('Cannot delete the DVD', 'Error')
			})
	}
}

module.exports = HomeController