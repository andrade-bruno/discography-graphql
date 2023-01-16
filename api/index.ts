import 'reflect-metadata'

import database from './models'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import ArtistsResolver from './resolvers/artists'
import DiscosResolver from './resolvers/discos'
import UsersResolver from './resolvers/users'

async function bootstrap() {
	const schema = await buildSchema({
		resolvers: [
			ArtistsResolver,
			DiscosResolver,
			UsersResolver
		],
		validate: false,
		emitSchemaFile: 'api/schemas/schemas.gql'
	})

	const server = new ApolloServer({
		schema
	})

	const port = process.env.PORT
	const { url } = await server.listen({port})

	console.info('\nServer is running')
	console.info(`${url}`)
	
	database.sequelize.sync()
		.then(() => console.info('Database synced successfully\n'))
		.catch((error: any) => console.error(error))
}

bootstrap()