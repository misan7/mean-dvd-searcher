function DataService ($http) {

	function getAllDvds() {
		return $http.get('/api/dvds')
			.then( response => response.data )
	}
	function getDvdById(id) {
		return $http.get(`/api/dvd/${id}`)
	}
	function addDvd( data ) {
		return $http.post('/api/dvds', data)
			.then( response => response.data )
	}

	return { getAllDvds, getDvdById, addDvd }
}

module.exports = DataService