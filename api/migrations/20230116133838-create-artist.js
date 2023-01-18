'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Artists', {
			id: {
				type: Sequelize.UUID,
				defaultValue: UUIDV4,
				primaryKey: true,
				allowNull: false
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			mainGenre: {
				type: Sequelize.STRING,
				allowNull: false
			},
			avatar: {
				type: Sequelize.STRING,
				allowNull: true
			},
			bio: {
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
		await queryInterface.dropTable('Artists');
	}
};