'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    userId: {
      type: DataTypes.INTEGER,
      allownull: false
    },
    recipeName: {
      type: DataTypes.STRING,
      allownull: false
    },      
    image: {
      type: DataTypes.BLOB
    },
    description: {
      type: DataTypes.STRING,
      allownull: false
    },      
    mealType: {
      type: DataTypes.STRING,
      allownull: false
    },     
    dishType: {
      type: DataTypes.STRING,
      allownull: false
    },      
    ingredients: {
      type: DataTypes.TEXT,
      allownull: false
    },      
    preparation: {
      type: DataTypes.TEXT,
    allownull: false
    }
  
  });
  recipes.associate = (models) => {
    recipes.hasMany(models.reviews), {
      foreignKey: 'recipeId'
    }
  }
  recipes.associate = (models) => {
    recipes.hasMany(models.views), {
      foreignKey: 'recipeId'
    }
  }
  recipes.associate = (models) => {
    recipes.hasMany(models.favourites), {
      foreignKey: 'recipeId'
    }
  }
  recipes.associate = (models) => {
    recipes.belongsTo(models.users), {
      foreignKey: 'userId'
    }
  }
  return recipes;
};