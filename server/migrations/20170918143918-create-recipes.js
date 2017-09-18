'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      recipeName: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      description: {
        type: Sequelize.STRING
      },
      mealType: {
        type: Sequelize.STRING
      },
      dishType: {
        type: Sequelize.STRING
      },
      infredients: {
        type: Sequelize.TEXT
      },
      preparation: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('recipes');
  }
};