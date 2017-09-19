'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      },
      recipeName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.BLOB
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mealType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dishType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ingredients: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      preparation: {
        type: Sequelize.TEXT,
        allowNull: false
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
  down: (queryInterface) =>
   queryInterface.dropTable('recipes')
  }
