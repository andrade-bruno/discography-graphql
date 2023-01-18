# Discography API with GraphQL

Building an NodeJS server for a Discography API with GraphQL and Apollo Server

Consumed tools
- Interfaces, Types, Inputs and Enum definitions
- TypeDefs, Resolvers
- Schemas
- Connect server with an external API Rest
- Dotenv
- Nodemon

Course: Alura - GraphQL: Build an API with Apollo Server

[Certificate](https://cursos.alura.com.br/user/bruno-andrade18/course/graphql-construindo-api-apollo-server/certificate)

Generate model

	npx sequelize-cli model:generate --name User --attributes id:string,name:string,email:string,active:boolean
	npx sequelize-cli model:generate --name Artist --attributes title:string,mainGenre:string,avatar:string,bio:string