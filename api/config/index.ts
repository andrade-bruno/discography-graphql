import dotenv from 'dotenv'
dotenv.config()

export const development = {
	username: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	dialect: process.env.DB_DIALECT,
	logging: console.log
}

export default development