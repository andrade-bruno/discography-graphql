import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateArtistInput, ArtistOutput } from '../dtos/input/artist'
import { MessageDeleteOutput } from '../dtos/output'
import Artist from '../dtos/models/artist.model'
import database from '../models'

@Resolver(belongsTo => Artist)
export class ArtistsResolver {
	@Query(() => [Artist], { nullable: true })
	async getArtists() {
		try {
			const artists = await database.Artists.findAll()
			return artists
		} catch (error: any) {
			return null
		}
	}

	@Query(returns => Artist, { nullable: true })
	async getArtistById(@Arg('id') id: string) {
		try {
			const data = await database.Artists.findOne({ where: {id}})
			return data
		} catch (error: any) {
			return null
		}
	}

	@Mutation(() => ArtistOutput)
	async createArtist(@Arg("data") data: CreateArtistInput) {
		try {
			const res = await database.Artists.create(data)
			return { message: 'Artist created successfully', data: res }
		} catch (error: any) {
			return { message: error.message, data: null }
		}
	}

	@Mutation(() => MessageDeleteOutput)
	async deleteArtist(@Arg("id") id: String) {
		try {
			const status = await database.Artists.destroy({ where: {id}})
			if (status == 0) return { message: "Can't delete. Artist does'nt exists" }
			return { message: 'Artist deleted successfully' }
		} catch (error: any) {
			return { message: error.message }
		}
	}
}

export default ArtistsResolver