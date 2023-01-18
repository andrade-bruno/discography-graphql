'use strict';

import { Model, UUIDV4 } from 'sequelize'

interface UserAttributes {
	id: string,
	name: string,
	email: string,
	active: boolean
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Users extends Model<UserAttributes> implements UserAttributes {
		id: string;
		name: string;
		email: string;
		active: boolean;

		static associate(models: any) {
			// define association here
		}
	}

	Users.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	}, {
		sequelize,
		modelName: 'Users',
	});
	return Users;
};