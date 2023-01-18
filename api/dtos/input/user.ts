import { Field, ID, InputType, ObjectType } from "type-graphql"
import User from "../models/user.model"

@InputType()
export class CreateUserInput {
	@Field()
	name: String

	@Field()
	email: String
}

@ObjectType()
export class UserOutput {
	@Field()
	message: String

	@Field(returns => User, { nullable: true})
	data?: User
}

@InputType()
export class UpdateUserInput {
	@Field(() => ID)
	id: String

	@Field({ nullable: true })
	name: String

	@Field({ nullable: true })
	email: String

	@Field({ nullable: true })
	active: Boolean
}