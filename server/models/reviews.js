'use strict';
module.exports = function(sequelize, DataTypes) {
  var reviews = sequelize.define('reviews', {
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    upVote: DataTypes.INTEGER,
    downVote: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return reviews;
};