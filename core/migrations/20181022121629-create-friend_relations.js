

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('FriendRelations', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		user_id: {
			type: Sequelize.INTEGER,
			onDelete: 'NO ACTION',
			references: {
				model: 'Users',
				key: 'id',
			},
		},
		friend_id: {
			type: Sequelize.INTEGER,
			onDelete: 'NO ACTION',
			references: {
				model: 'Users',
				key: 'id',
			},
		},
		relation: {
			type: Sequelize.ENUM('friend', 'block', 'ignored')
		},
		created_at: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updated_at: {
			allowNull: false,
			type: Sequelize.DATE,
		}
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('FriendRelations'),
};
