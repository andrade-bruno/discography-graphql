const artistResolver = {
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