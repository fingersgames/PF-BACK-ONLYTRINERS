const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Chat', {
    idChat: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    msj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  },{timestamps: true })}