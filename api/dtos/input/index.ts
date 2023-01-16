import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MessageDeleteOutput {
	@Field()
	message: string
}