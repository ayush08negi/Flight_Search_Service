'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
  
    static associate(models) {
      // define association here like 1:n, n:1, n:m 

    this.hasMany(models.Airport,{
      foreignKey: 'cityID'
    });
      
    }
  }
  City.init({
    name: {
     type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};