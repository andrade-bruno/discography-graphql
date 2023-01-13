import { Field, InputType } from "type-graphql"
import Artist from "../models/artist.model"

@InputType()
export class CreateDiscoInput {
	@Field()
	// artist: Artist
	artist: Number

	@Field()
	title: String

	@Field()
	// releaseDate: 
	releaseDate: String
	
	@Field()
	avatar: String

	@Field()
	recorder: String

	@Field()
	// genres: [GenresEnum]
	genres: String

	@Field()
	type: String

	@Field()
	// contributors: [String]
	contributors: String
}

export default CreateDiscoInput