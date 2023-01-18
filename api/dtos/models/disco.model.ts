import { Field, ID, ObjectType, } from "type-graphql"
import Artist from "./artist.model"

@ObjectType()
export class Disco {
	@Field(() => ID)
	id: String

	@Field(() => ID)
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
	// type: [TypesEnum]
	type: String

	@Field({ nullable: true })
	// contributors: [String]
	contributors: String

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}

export default Disco