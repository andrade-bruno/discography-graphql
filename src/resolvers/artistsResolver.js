const artistResolver = {
	Query: {
		artists: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtists(),
		artist: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtistById(args.id)
	},
	Mutation: {
		addArtist: (root, args, { dataSources }, info) => dataSources.artistsAPI.addArtist(args)
	}
}

module.exports = artistResolver