import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import CreateDiscoInput from '../dtos/input/create-disco'
import Artist from '../dtos/models/artist.model'
import Disco from '../dtos/models/disco.model'

@Resolver(belongsTo => Disco)
export class DiscosResolver {
	@Query(() => Disco)
	async getDiscos() {
		return {
			title: "String",
			releaseDate: "String",
			avatar: "String",
			recorder: "String",
			genres: "String",
			type: "String",
			contributors: "String"
		}
	}

	@Mutation(() => Disco)
	async createDisco(@Arg("data") data: CreateDiscoInput) {
		return data
	}

	@FieldResolver(returns => Artist)
	async artist(@Root() disco: Disco) {
		return {
			title: 'Some band',
			mainGenre: 'Rock',
			avatar: 'hhttp....',
			bio: 'Bio'
		}
	}
}

export default DiscosResolver