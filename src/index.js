require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const ArtistsAPI = require('./datasources/artists')
const DiscosAPI = require('./datasources/discos')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')
const port = process.env.PORT || 8000

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			artistsAPI: new ArtistsAPI(),
			discosAPI: new DiscosAPI()
		}
	}
})

server.listen({ port }).then(() => {
	console.info(`\nServer running...`)
	console.info(`http://localhost:${port}/`)
})