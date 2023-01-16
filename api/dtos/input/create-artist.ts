import { Field, InputType } from "type-graphql"

@InputType()
export class CreateArtistInput {
	@Field()
	title: String

	@Field()
	mainGenre: String

	@Field({ nullable: true })
	avatar: String

	@Field({ nullable: true })
	bio: String
}

export default CreateArtistInput