import database from '../models'

import users from './users'
import artists from './artists'
import discos from './discos'

export const bulkInsertUsers = () => {
	users.map(async (item) => {
		try {
			const [row, created] = await database.Users.findOrCreate({ where: {id: item.id}})
		} catch (error: any) {
			console.info(error.errors)
		}
	})
}

export const bulkInsertArtists = () => {
	artists.map(async (item) => {
		try {
			const [row, created] = await database.Artists.findOrCreate({ where: {id: item.id}})
		} catch (error: any) {
			console.info(error.errors)
		}
	})
}

export const bulkInsertDiscos = () => {
	discos.map(async (item) => {
		try {
			const [row, created] = await database.Discos.findOrCreate({ where: {id: item.id}})
		} catch (error: any) {
			console.info(error.errors)
		}
	})
}