import { Field, ID, ObjectType, } from "type-graphql"
import Artist from "./artist.model"

@ObjectType()
export class Disco {
	@Field(() => ID)
	artistId: number
	
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
	// genres: [String]
	genres: String

	@Field()
	type: String

	@Field({ nullable: true })
	// contributors: [String]
	contributors: String
}

export default Disco