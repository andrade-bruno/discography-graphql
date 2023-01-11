const artists = [
	{
		title: 'Bruno',
		active: true
	},
	{
		title: 'José',
		active: false
	}
]

const artistResolver = {
	Query: {
		artists: () => artists,
		firstArtist: () => artists[0]
	}
}

module.exports = artistResolver