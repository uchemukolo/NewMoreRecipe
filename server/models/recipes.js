'use strict';
module.exports = function(sequelize, DataTypes) {
  var recipes = sequelize.define('recipes', {
    userId: DataTypes.INTEGER,
    recipeName: DataTypes.STRING,
    image: DataTypes.BLOB,
    description: DataTypes.STRING,
    mealType: DataTypes.STRING,
    dishType: DataTypes.STRING,
    infredients: DataTypes.TEXT,
    preparation: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return recipes;
};