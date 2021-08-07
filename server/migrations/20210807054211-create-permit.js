'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Permits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bin__: {
        type: Sequelize.NUMBER
      },
      novdescription: {
        type: Sequelize.STRING
      },
      filing_date: {
        type: Sequelize.DATEONLY
      },
      owner_s_business_name: {
        type: Sequelize.STRING
      },
      owner_s_first_name: {
        type: Sequelize.STRING
      },
      owner_s_last_name: {
        type: Sequelize.STRING
      },
      owner_s_house__: {
        type: Sequelize.STRING
      },
      owner_s_house_street_name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      owner_s_zip_code: {
        type: Sequelize.STRING
      },
      owner_s_phone__: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Permits');
  }
};