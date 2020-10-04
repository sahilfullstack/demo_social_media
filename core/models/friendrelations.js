'use strict';

module.exports = (sequelize, DataTypes) => {
  const FriendRelations = sequelize.define('FriendRelations', {
    id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
    user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
    friend_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		relation: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdAt: {
			type: DataTypes.DATE, field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE, field: 'updated_at',
		}
  }, {});
  FriendRelations.associate = function(models) {
	FriendRelations.belongsTo(models.Users, {
		as:'user',
		foreignKey: 'friend_id',
	});
  };
  return FriendRelations;
};