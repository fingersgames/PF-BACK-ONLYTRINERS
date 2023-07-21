const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Plan', {
  idPlan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  privateDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive:{
    type:DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})}