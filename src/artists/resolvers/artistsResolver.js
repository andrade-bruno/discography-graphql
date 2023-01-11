const artistResolver = {
	Query: {
		artists: (root, args, { dataSources }, info) => dataSources.artistsAPI.getArtists()
	}
}

module.exports = artistResolver