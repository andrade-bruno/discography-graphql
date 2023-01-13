import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import CreateArtistInput from '../dtos/input/create-artist'

@Resolver()
export class ArtistsResolver {
	@Query(() => String)
	async hello() {
		return 'Hello'
	}

	@Mutation(() => Boolean)
	async createArtist(@Arg('data') data: CreateArtistInput) {
		return true
	}
}

export default ArtistsResolver