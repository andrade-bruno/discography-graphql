const ArtistResolver = require('./artistsResolver')
const DiscoResolver = require('./discosResolver')

const resolvers = [
	ArtistResolver,
	DiscoResolver
]

module.exports = resolvers