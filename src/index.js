const dotenv = require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const ArtistSchema = require('./artists/schema/artist.graphql')
const ArtistResolver = require('./artists/resolvers/artistsResolver.js')

const port = process.env.PORT || 8000

const typeDefs = [ArtistSchema]
const resolvers = [ArtistResolver]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port }).then(() => {
	console.info(`\nServer is running`)
	console.info(`http://localhost:${port}${server.graphqlPath}`)
})