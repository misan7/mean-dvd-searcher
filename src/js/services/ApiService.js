function DataService ($http) {

	function getAllDvds() {
		return $http.get('dvds')
			.then( response => response.data )
	}

	return { getAllDvds }
}

module.exports = DataService