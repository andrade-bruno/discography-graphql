import { Field, ID, InputType } from "type-graphql"

@InputType()
export class CreateUserInput {
	@Field()
	name: String

	@Field()
	email: String
}

export default CreateUserInput