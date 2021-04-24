
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(44),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(44),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      login: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
        validate: {
          len: [6,18],
        }
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
      
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
    await queryInterface.dropTable('Users');
  }
};