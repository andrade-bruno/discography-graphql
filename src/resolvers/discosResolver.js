const discoResolver = {
	Query: {
		discos: (root, args, { dataSources }, info) => dataSources.discosAPI.getDiscos(),
		disco: (root, args, { dataSources }, info) => dataSources.discosAPI.getDiscoById(args.id)
	}
}

module.exports = discoResolver