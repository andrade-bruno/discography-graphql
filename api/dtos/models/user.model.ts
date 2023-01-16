import { Field, ID, ObjectType, } from "type-graphql"

@ObjectType()
export class User {
	@Field(() => ID)
	id: String
	
	@Field()
	name: String

	@Field()
	email: String

	@Field()
	active: boolean

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}

export default User