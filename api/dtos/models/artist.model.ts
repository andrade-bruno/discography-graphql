import { Field, ObjectType } from "type-graphql"

@ObjectType()
export default class Artist {
	@Field()
	title: String

	@Field()
	mainGenre: String

	@Field({ nullable: true })
	avatar: String

	@Field({ nullable: true })
	bio: String
}