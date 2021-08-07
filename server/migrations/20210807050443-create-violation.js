'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Violations', {
      /* id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }, */
      violationid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      inspectiondate: {
        type: Sequelize.DATE
      },
      novdescription: {
        type: Sequelize.STRING
      },
      bin: {
        type: Sequelize.NUMBER
      },
      // Had commented these out but violations can be back-dated
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
    await queryInterface.dropTable('Violations');
  }
};