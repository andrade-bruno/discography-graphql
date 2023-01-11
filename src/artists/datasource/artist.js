const { RESTDataSource } = require('apollo-datasource-rest')

class ArtistsAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'http://localhost:3000'
	}

	async getArtists() {
		return this.get('/artists')
	}
}

module.exports = ArtistsAPI