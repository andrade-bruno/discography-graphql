const { RESTDataSource } = require('apollo-datasource-rest')

class DiscosAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'http://localhost:3000'
	}

	async getDiscos() {
		const discos = await this.get('/discos')
		return discos.map(async disco => ({
			...disco,
			artist: await this.get(`/artists/${disco.artistId}`)
		}))
	}

	async getDiscoById(id) {
		const disco = await this.get(`/discos/${id}`)
		disco.artist = await this.get(`/artists/${disco.artistId}`)
		return disco
	}
}

module.exports = DiscosAPI