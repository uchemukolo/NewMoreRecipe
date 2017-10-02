'use strict';
module.exports = (sequelize, DataTypes) =>{
  const views = sequelize.define('views', {
    recipeId: {
      type: DataTypes.INTEGER
    },
    views: {
      type: DataTypes.INTEGER
    }
  });
  views.associate = (models) => {
    views.belongsTo(models.recipes),{
      foreignKey: 'recipeId'
      
    }
  }
  return views;
}