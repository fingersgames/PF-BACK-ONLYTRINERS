const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Rating', {
  idRating: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
}