import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import CreateArtistInput from '../dtos/input/create-artist'
import Artist from '../dtos/models/artist.model'

@Resolver(belongsTo => Artist)
export class ArtistsResolver {
	@Query(() => Artist)
	async getArtists() {
		return {
			title: "String",
			mainGenre: "String",
			avatar: "String",
			bio: "String"
		}
	}

	@Mutation(() => Artist)
	async createArtist(@Arg("data") data: CreateArtistInput) {
		return data
	}
}

export default ArtistsResolver