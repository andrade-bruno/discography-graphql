import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import CreateUserInput from '../dtos/input/create-user'
import User from '../dtos/models/user.model'

@Resolver(belongsTo => User)
export class UsersResolver {
	@Query(() => [User])
	async getUsers() {
		return [{
			id: '123918a087s',
			email: "José",
			name: "jose@email.com",
			active: true,
		}]
	}

	@Mutation(() => User)
	async createUser(@Arg("data") data: CreateUserInput) {

		let res = {
			...data,
			id: '1231',
			active: true
		}
		return res
	}
}

export default UsersResolver