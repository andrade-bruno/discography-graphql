require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const ArtistSchema = require('./artists/schema/artist.graphql')
const ArtistResolver = require('./artists/resolvers/artistsResolver.js')
const ArtistsAPI = require('./artists/datasource/artist')

const port = process.env.PORT || 8000

const typeDefs = [ArtistSchema]
const resolvers = [ArtistResolver]

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			artistsAPI: new ArtistsAPI()
		}
	}
})

server.listen({ port }).then(() => {
	console.info(`\nServer running...`)
	console.info(`http://localhost:${port}/`)
})