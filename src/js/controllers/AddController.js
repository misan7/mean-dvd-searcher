function AddController( $scope, ApiService ) {

	$scope.addDvd = () => {

		const {name, description, availability, image} = $scope

		ApiService.addDvd({name, description, availability, image})
			.then( response => {
				toastr.success('You have added a new DVD')
			})
			.catch( error => {
				toastr.error('An error occured attempting to introduce a new DVD', error)
			})
	}
}

module.exports = AddController
