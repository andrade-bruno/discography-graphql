const { GraphQLScalarType } = require('graphql')

const artistResolver = {
	DateTime: new GraphQLScalarType({
		name: "DateTime",
		description: "Data and hour as ISO-8601 string",
		serialize: (value) => new Date(value).toISOString(), // Database handler
		parseValue: (value) => new Date(value), // Variables input handler
		parseLiteral: (ast) => new Date(ast.value) // Argument input handler
	}),
	Query: {
		artists: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtists(),
		artist: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtistById(args.id)
	},
	Mutation: {
		addArtist: async (root, args, { dataSources }, info) => dataSources.artistsAPI.addArtist(args),
		updateArtist: async (root, args, { dataSources }, info) => dataSources.artistsAPI.updateArtist(args),
		deleteArtist: async (root, args, { dataSources }, info) => dataSources.artistsAPI.deleteArtist(args)
	}
}

module.exports = artistResolver