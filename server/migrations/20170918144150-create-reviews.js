'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('reviews', {
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
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'recipes',
          key: 'id',
          as: 'recipeId'
        }
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      upVote: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      downVote: {
        type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) =>
     queryInterface.dropTable('reviews')
  }