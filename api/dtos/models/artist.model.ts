import { Field, ObjectType } from "type-graphql"

@ObjectType()
export default class Artist {
	@Field()
	title: String

	@Field()
	mainGenre: String

	@Field()
	avatar?: String

	@Field()
	bio?: String
}