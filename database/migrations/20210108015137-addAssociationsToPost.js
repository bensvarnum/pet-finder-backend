'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Posts',
      'postType',
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
    await queryInterface.addColumn(
      'Posts',
      'status',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Posts');
  }
};
