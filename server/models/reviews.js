'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    }
 
  });

  reviews.associate = (models) => {
    reviews.belongsTo(models.users),{
      foreignKey: 'userId' 
    }
  }
  reviews.associate = (models) => {
    reviews.belongsTo(models.recipes),{
      foreignKey: 'recipeId' 
    }
  }
  return reviews;
};