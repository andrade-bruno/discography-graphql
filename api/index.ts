import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import ArtistsResolver from './resolvers/artists'

async function bootstrap() {
	const schema = await buildSchema({
		resolvers: [
			ArtistsResolver,
		],
		emitSchemaFile: 'api/schema/schemas.gql'
	})

	const server = new ApolloServer({
		schema
	})

	const { url } = await server.listen()

	console.info('\nServer is running')
	console.info(`${url}\n`)
}

bootstrap()