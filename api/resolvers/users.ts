import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {CreateUserInput, UserOutput} from '../dtos/input/user'
import User from '../dtos/models/user.model'
import database from '../models'

@Resolver(belongsTo => User)
export class UsersResolver {
	@Query(() => [User])
	async getUsers() {
		const users = await database.Users.findAll()
		return users
	}

	@Mutation(() => UserOutput)
	async createUser(@Arg("data") data: CreateUserInput) {
		let user = { ...data, active: true }

		try {
			const res = await database.Users.create(user)
			let message = 'User created successfully'
			return { message, data: res }
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(error.errors[0])
			return { message, data: null }
		}
	}
}

export default UsersResolver