const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Bought', {
    idBought: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
})}