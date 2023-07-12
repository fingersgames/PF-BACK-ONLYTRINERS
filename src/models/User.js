const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
  idUsuario: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  userName:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sex: {
    type: DataTypes.ENUM("male", "female", "it"),
    allowNull: false,
  },
  type:{
    type:DataTypes.ENUM("user","trainer","admin")
  }
})
}
