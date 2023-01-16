import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { MessageDeleteOutput } from '../dtos/output'
import { CreateUserInput, UserOutput, UpdateUserInput } from '../dtos/input/user'
import User from '../dtos/models/user.model'
import database from '../models'

@Resolver(belongsTo => User)
export class UsersResolver {
	@Query(() => [User])
	async getUsers() {
		try {
			const users = await database.Users.findAll()
			return users
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(message)
			return null
		}
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

	@Mutation(() => UserOutput)
	async updateUser(@Arg("data") data: UpdateUserInput) {
		try {
			const status = await database.Users.update(data, { where: {id: data.id }})
			console.log(status)
			if (status == 0) return { message: "Can't update. User does'nt exists", data: null }

			const updatedUser = await database.Users.findOne({ where: {id: data.id} })
			return { message: 'User updated successfully', data: updatedUser }
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(error.errors[0])
			return message
		}
	}

	@Mutation(() => MessageDeleteOutput)
	async deleteUser(@Arg("id") id: String) {
		try {
			const status = await database.Users.destroy({ where: {id}})
			if (status == 0) return { message: "Can't delete. User does'nt exists" }
			return { message: 'User deleted successfully' }
		} catch (error: any) {
			const message = error.errors[0].message
			console.log(error.errors[0])
			return message
		}
	}
}

export default UsersResolver