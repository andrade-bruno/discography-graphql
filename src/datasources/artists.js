const { RESTDataSource } = require('apollo-datasource-rest')

class ArtistsAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'http://localhost:3000'
	}

	async getArtists() {
		return this.get('/artists')
	}

	async getArtistById(id) {
		return this.get(`/artists/${id}`)
	}

	async addArtist(artist) {
		const artists = await this.get('/artists')
		artist.id = artists.length + 1

		await this.post('/artists', artist)
		return artist
	}
}

module.exports = ArtistsAPI