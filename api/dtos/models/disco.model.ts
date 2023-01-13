import { Field, ObjectType } from "type-graphql"
import Artist from "./artist.model"

@ObjectType()
export class Disco {
	@Field()
	// artist: Artist
	artist: Number

	@Field()
	title: String

	@Field()
	// releaseDate: Date
	releaseDate: String

	@Field()
	avatar: String

	@Field()
	recorder: String

	@Field()
	// genres: [GenresEnum]
	genres: [String]

	@Field()
	type: String

	@Field()
	contributors: [String]
}

export default Disco