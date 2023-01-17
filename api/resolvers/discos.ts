import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { CreateDiscoInput, DiscoOutput } from '../dtos/input/disco'
import Artist from '../dtos/models/artist.model'
import Disco from '../dtos/models/disco.model'
import { MessageDeleteOutput } from '../dtos/output'
import database from '../models'

@Resolver(belongsTo => Disco)
export class DiscosResolver {
	@Query(returns => [Disco], { nullable: true })
	async getDiscos() {
		try {
			const discos = await database.Discos.findAll()
			return discos
		} catch (error: any) {
			return null
		}
	}

	@Query(returns => Disco, { nullable: true })
	async getDiscoById(@Arg('id') id: string) {
		try {
			const disco = await database.Discos.findOne({ where: {id}})
			return disco
		} catch (error: any) {
			return null
		}
	}

	@Mutation(() => DiscoOutput)
	async createDisco(@Arg("data") data: CreateDiscoInput) {
		try {
			const res = await database.Discos.create(data)
			return { message: 'Disco created successfully', data: res }
		} catch (error: any) {
			return { message: error.message, data: null }
		}
	}

	@Mutation(() => MessageDeleteOutput)
	async deleteDisco(@Arg("id") id: String) {
		try {
			const status = await database.Discos.destroy({ where: {id}})
			if (status == 0) return { message: "Can't delete. Disco does'nt exists" }
			return { message: 'Disco deleted successfully' }
		} catch (error: any) {
			return { message: error.message }
		}
	}

	@FieldResolver(returns => Artist, { nullable: true })
	async artist(@Root() disco: any) {
		try {
			const artist = await database.Artists.findOne({ where: {id: String(disco.dataValues.artistId)}})
			return artist
		} catch (error: any) {
			return null
		}
	}
}

export default DiscosResolver