import { Field, ID, InputType, ObjectType } from "type-graphql"
import Disco from "../models/disco.model"

@InputType()
export class CreateDiscoInput {
	@Field(type => ID)
	artistId: Number

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
}

@ObjectType()
export class DiscoOutput {
	@Field()
	message: String

	@Field(returns => Disco, { nullable: true})
	data?: Disco
}