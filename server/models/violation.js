'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Violation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.violation.hasMany(models.permit)
      /* Is this needed for the join?
      models.violation.hasMany(models.permit, {
        foreignKey: 'bin__',
        as: 'bin',
      });
      */
    }
  };
  Violation.init({
    violationid: DataTypes.INTEGER,
    inspectiondate: DataTypes.DATE,
    bin: DataTypes.NUMBER,
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
    modelName: 'Violation'/*,
    // Turns out we probably need timestamps here since violations can be back-dated
    timestamps: false */
  });
  return Violation;
};