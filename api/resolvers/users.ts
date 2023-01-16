import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import CreateUserInput from '../dtos/input/create-user'
import User from '../dtos/models/user.model'
import database from '../models'

@Resolver(belongsTo => User)
export class UsersResolver {
	@Query(() => [User])
	async getUsers() {
		const users = await database.Users.findAll()
		return users
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