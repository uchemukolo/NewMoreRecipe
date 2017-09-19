'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourites = sequelize.define('favourites', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  favourites.associate = (models) => {
    favourites.belongsto(models.recipes),{
      foreignKey: 'recipeId'
    }
  }
  favourites.associate = (models) => {
    favourites.belongsto(models.users),{
      foreignKey: 'userId'
      
    }
  }
  return favourites;
};