'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique:true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return users;
};