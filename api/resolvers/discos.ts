import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import CreateDiscoInput from '../dtos/input/create-disco'

@Resolver()
export class DiscosResolver {
	@Query(() => String)
	async getDiscos() {
		return "Discos"
	}

	@Mutation(() => Boolean)
	async createDisco(@Arg("data") data: CreateDiscoInput) {
		return true
	}
}

export default DiscosResolver