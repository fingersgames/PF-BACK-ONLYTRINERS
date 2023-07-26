const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    idUser: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
    },  
  userName:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  firstName: {
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
    type: DataTypes.ENUM("Male", "Female", "unknown"),
    allowNull: false,
  },
  typeUser:{
    type:DataTypes.ENUM("Client","Trainer","admin")
  },
  urlImage:{
    type:DataTypes.STRING,
    allowNull: true,
  },
  isActive:{
    type:DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})
}
