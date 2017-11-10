function DataService ($http) {

	function getAllDvds() {
		return $http.get('api/dvds')
			.then( response => response.data )
	}

	return { getAllDvds }
}

module.exports = DataService