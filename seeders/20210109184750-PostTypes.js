'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PostTypes', [{
      postType: 'Lost',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      postType: 'Found',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PostTypes', null, {});
  }
};
