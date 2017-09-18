'use strict';
module.exports = function(sequelize, DataTypes) {
  var favourites = sequelize.define('favourites', {
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return favourites;
};