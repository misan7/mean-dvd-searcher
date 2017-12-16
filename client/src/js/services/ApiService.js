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
	function removeDvd( id ) {
		return $http.delete(`/api/dvd/${id}`)
			.then( response => response.data )
	}

	return { getAllDvds, getDvdById, addDvd, removeDvd }
}

module.exports = DataService