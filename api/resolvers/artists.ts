import { Query, Resolver } from 'type-graphql'

@Resolver()
export class ArtistsResolver {
	@Query(() => String)
	async hello() {
		return 'Hello'
	}
}

export default ArtistsResolver