const artistResolver = {
	Query: {
		artists: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtists(),
		artist: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtistById(args.id)
	}
}

module.exports = artistResolver