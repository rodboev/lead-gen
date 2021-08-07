'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.permit.belongsTo(models.user)
    }
  };
  Permit.init({
    bin__: DataTypes.INTEGER,
    novdescription: DataTypes.STRING,
    filing_date: DataTypes.DATEONLY,
    owner_s_business_name: DataTypes.STRING,
    owner_s_first_name: DataTypes.STRING,
    owner_s_last_name: DataTypes.STRING,
    owner_s_house__: DataTypes.STRING,
    owner_s_house_street_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    owner_s_zip_code: DataTypes.STRING,
    owner_s_phone__: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permit'
  });
  return Permit;
};