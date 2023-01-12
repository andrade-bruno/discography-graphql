const ArtistSchema = require('./artist.graphql')
const DiscoSchema = require('./disco.graphql')

const typeDefs = [
	ArtistSchema,
	DiscoSchema
]

module.exports = typeDefs