import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import ArtistsResolver from './resolvers/artists'
import DiscosResolver from './resolvers/discos'

async function bootstrap() {
	const schema = await buildSchema({
		resolvers: [
			ArtistsResolver,
			DiscosResolver
		],
		validate: false,
		emitSchemaFile: 'api/schemas/schemas.gql'
	})

	const server = new ApolloServer({
		schema
	})

	const { url } = await server.listen()

	console.info('\nServer is running')
	console.info(`${url}\n`)
}

bootstrap()