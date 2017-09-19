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
    },
    upVote: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    downVote: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  reviews.associate = (models) => {
    reviews.belongsto(models.users),{
      foreignKey: 'userId' 
    }
  }
  reviews.associate = (models) => {
    reviews.belongsto(models.recipes),{
      foreignKey: 'recipeId' 
    }
  }
  return reviews;
};