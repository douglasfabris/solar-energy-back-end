'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('geracao', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      reference_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total_generated: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UnidadeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'unidades',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Geracoes');
  },
};
