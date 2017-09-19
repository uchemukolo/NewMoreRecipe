'use strict';
module.exports = (sequelize, DataTypes) =>{
  const views = sequelize.define('views', {
    recipeId: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  });
  views.associate = (models) => {
    views.belongsto(models.recipes),{
      foreignKey: 'recipeId'
      
    }
  }
  return views;
}