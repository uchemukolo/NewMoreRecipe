'use strict';
module.exports = function(sequelize, DataTypes) {
  var views = sequelize.define('views', {
    recipeId: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return views;
};