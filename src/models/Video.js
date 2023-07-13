const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Video', {
  idVideo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publico: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, { timestamps: false});
}