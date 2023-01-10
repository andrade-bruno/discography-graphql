import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

const schema = gql(`
	type Query {
		main: String!
	}
`)

const resolver = {
	Query: {
		main: () => 'Discography API with GraphQL'
	}
}

const server = new ApolloServer({
	typeDefs: schema,
	resolvers: resolver
})

const app = express()
server.start().then(
	() => server.applyMiddleware({ app })
).catch(err => console.info(err))

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.listen({ port }, () => {
	console.info(`\nServer is running`)
	console.info(`http://localhost:${port}${server.graphqlPath}`)
})