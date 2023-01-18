'use strict';

import { Model, UUIDV4 } from 'sequelize'

interface DiscoAttributes {
	id: string,
	artistId: string,
	title: string,
	releaseDate: Date,
	avatar?: string,
	recorder: string,
	genres?: string,
	type: string,
	contributors?: string
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Discos extends Model<DiscoAttributes> implements DiscoAttributes {
		id: string;
		artistId: string;
		title: string;
		releaseDate: Date;
		avatar?: string;
		recorder: string;
		genres?: string;
		type: string;
		contributors?: string;

		static associate(models: any) {
			// define association here
			Discos.belongsTo(models.Artists, {
				foreignKey: 'artistId'
			})
		}
	}

	Discos.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
			allowNull: false
		},
		artistId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'Artists',
				key: 'id'
			}
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		releaseDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		avatar: {
			type: DataTypes.STRING,
			allowNull: true
		},
		recorder: {
			type: DataTypes.STRING,
			allowNull: false
		},
		genres: {
			// type: [GenresEnum]
			type: DataTypes.STRING,
			allowNull: true
		},
		type: {
			// type: [TypesEnum]
			type: DataTypes.STRING,
			allowNull: false
		},
		contributors: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		sequelize,
		modelName: 'Discos',
	});
	return Discos;
};