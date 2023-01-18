'use strict';

import { Model, UUIDV4 } from 'sequelize'

interface ArtistAttributes {
	id: string,
	title: string,
	mainGenre: string
	avatar?: string,
	bio?: string
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Artists extends Model<ArtistAttributes> implements ArtistAttributes {
		id: string;
		title: string;
		mainGenre: string;
		avatar?: string;
		bio?: string;

		static associate(models: any) {
			// define association here
			Artists.hasMany(models.Discos, {
				foreignKey: 'artistId'
			})
		}
	}

	Artists.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		mainGenre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		avatar: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		bio: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		sequelize,
		modelName: 'Artists',
	});
	return Artists;
};