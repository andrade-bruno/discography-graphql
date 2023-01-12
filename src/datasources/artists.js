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
		const orderedByIdDescending = artists.sort((a, b) => b.id - a.id)
		artist.id = orderedByIdDescending[0].id + 1

		await this.post('/artists', artist)
		return artist
	}

	async updateArtist(newData) {
		const { id } = newData
		await this.put(`/artists/${id}`, newData)
		return await this.get(`/artists/${id}`)
	}

	async deleteArtist(args) {
		const { id } = args
		const artist = await this.get(`/artists/${id}`)
		await this.delete(`/artists/${id}`)
		return artist
	}
}

module.exports = ArtistsAPI