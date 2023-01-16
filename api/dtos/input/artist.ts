import { Field, InputType, ObjectType } from "type-graphql"
import Artist from '../models/artist.model'

@InputType()
export class CreateArtistInput {
	@Field()
	title: String

	@Field()
	mainGenre: String

	@Field({ nullable: true })
	avatar: String

	@Field({ nullable: true })
	bio: String
}

@ObjectType()
export class ArtistOutput {
	@Field()
	message: string

	@Field({nullable: true})
	data: Artist
}