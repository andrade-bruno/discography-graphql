const { RESTDataSource } = require('apollo-datasource-rest')

class DiscosAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'http://localhost:3000'
	}

	async getDiscos() {
		return this.get('/discos')
	}

	async getDiscoById(id) {
		return this.get(`/discos/${id}`)
	}
}

module.exports = DiscosAPI