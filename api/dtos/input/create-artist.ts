import { Field, InputType } from "type-graphql"

@InputType()
export class CreateArtistInput {
	@Field()
	title: String

	@Field()
	mainGenre: String

	@Field()
	avatar?: String

	@Field()
	bio?: String
}

export default CreateArtistInput