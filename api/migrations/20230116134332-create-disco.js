'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Discos', {
			id: {
				type: Sequelize.UUID,
				defaultValue: UUIDV4,
				primaryKey: true,
				allowNull: false
			},
			artistId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Artists',
					key: 'id'
				}
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			releaseDate: {
				type: Sequelize.DATE,
				allowNull: false
			},
			avatar: {
				type: Sequelize.STRING,
				allowNull: true
			},
			recorder: {
				type: Sequelize.STRING,
				allowNull: false
			},
			genres: {
				// type: [GenresEnum]
				type: Sequelize.STRING,
				allowNull: true
			},
			type: {
				// type: [TypesEnum]
				type: Sequelize.STRING,
				allowNull: false
			},
			contributors: {
				type: Sequelize.STRING,
				allowNull: true
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Discos');
	}
};