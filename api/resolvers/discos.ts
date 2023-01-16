import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import CreateDiscoInput from '../dtos/input/disco'
import Artist from '../dtos/models/artist.model'
import Disco from '../dtos/models/disco.model'
import database from '../models'

@Resolver(belongsTo => Disco)
export class DiscosResolver {
	@Query(returns => [Disco], { nullable: true })
	async getDiscos() {
		try {
			const discos = await database.Discos.findAll()
			return discos
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(message)
			return null
		}
	}

	@Query(returns => Disco, { nullable: true })
	async getDiscoById(@Arg('id') id: string) {
		try {
			const disco = await database.Discos.findOne({ where: {id}})
			return disco
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(message)
			return null
		}
	}

	@Mutation(() => Disco)
	async createDisco(@Arg("data") data: CreateDiscoInput) {
		return data
	}

	@FieldResolver(returns => Artist, { nullable: true })
	async artist(@Root() disco: any) {
		try {
			const artist = await database.Artists.findOne({ where: {id: String(disco.dataValues.artistId)}})
			return artist
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(message)
			return null
		}
	}
}

export default DiscosResolver