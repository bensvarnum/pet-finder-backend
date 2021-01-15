'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Posts',
      'imageType',
      {
        type: Sequelize.STRING
      });
    await queryInterface.addColumn(
      'Posts',
      'imageName',
      {
        type: Sequelize.STRING
      });
    await queryInterface.addColumn(
      'Posts',
      'imageData',
      {
        type: Sequelize.BLOB('long')
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('Posts');
  }
};
