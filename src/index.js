require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const ArtistSchema = require('./schemas/artist.graphql')
const DiscoSchema = require('./schemas/disco.graphql')
const ArtistResolver = require('./resolvers/artistsResolver')
const DiscoResolver = require('./resolvers/discosResolver')
const ArtistsAPI = require('./datasources/artists')
const DiscosAPI = require('./datasources/discos')

const port = process.env.PORT || 8000
const resolvers = [ArtistResolver, DiscoResolver]
const typeDefs = [ArtistSchema, DiscoSchema]

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