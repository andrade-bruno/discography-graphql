import 'reflect-metadata'

import database from './models'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import resolvers from './resolvers'
import { bulkInsertArtists, bulkInsertDiscos, bulkInsertUsers } from './seeders'

async function bootstrap() {
	const schema = await buildSchema({
		resolvers,
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
		.then(() => {
			console.info('Database synced successfully\n')
			bulkInsertUsers()
			bulkInsertArtists()
			bulkInsertDiscos()
		})
		.catch((error: any) => console.error(error))
}

bootstrap()