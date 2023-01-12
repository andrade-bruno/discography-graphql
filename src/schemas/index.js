const ArtistSchema = require('./artist.graphql')
const DiscoSchema = require('./disco.graphql')
const GenresEnum = require('./genresEnum.graphql')

const typeDefs = [
	ArtistSchema,
	DiscoSchema,
	GenresEnum
]

module.exports = typeDefs