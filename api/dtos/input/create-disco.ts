import { Field, ID, InputType } from "type-graphql"
import { GraphQLID } from "graphql"
import Artist from "../models/artist.model"

@InputType()
export class CreateDiscoInput {
	@Field(type => ID)
	artistId: String

	@Field()
	title: String

	@Field()
	releaseDate: Date
	
	@Field({ nullable: true })
	avatar: String

	@Field()
	recorder: String

	@Field({ nullable: true })
	// genres: [GenresEnum]
	genres: String

	@Field()
	type: String

	@Field({ nullable: true })
	// contributors: [String]
	contributors: String
}

export default CreateDiscoInput