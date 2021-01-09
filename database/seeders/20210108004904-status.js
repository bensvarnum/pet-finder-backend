'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Statuses', [{
     statusType: 'resolved',
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     statusType: 'unresolved',
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
