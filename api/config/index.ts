import dotenv from 'dotenv'
dotenv.config()

// import { Sequelize } from "sequelize-typescript"

// export const connection = new Sequelize({
// 	dialect: 'postgres',
// 	host: process.env.DB_HOST,
// 	port: Number(process.env.DB_PORT),
// 	username: process.env.DB_USER,
// 	password: process.env.DB_PWD,
// 	database: process.env.DB_NAME,
// 	logging: true,
// })

export default {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		dialect: process.env.DB_DIALECT,
		logging: true
		// models: [Artists, Songs, Discos]
	}
}