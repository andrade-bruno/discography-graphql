import { Field, InputType } from "type-graphql"

@InputType()
export default class CreateArtistInput {
	@Field()
	title: String

	@Field()
	formedDate: Date
	
	@Field()
	mainGenre: String

	@Field()
	avatar: String

	@Field()
	bio: String
}
