'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Posts',
      'PostTypeId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'PostTypes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts')
  }
};
