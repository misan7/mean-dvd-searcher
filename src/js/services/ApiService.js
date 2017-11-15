function DataService ($http) {

	function getAllDvds() {
		return $http.get('/api/dvds')
			.then( response => response.data )
	}
	function getDvdById(id) {
		return $http.get(`/api/dvd/${id}`)
	}

	return { getAllDvds, getDvdById }
}

module.exports = DataService