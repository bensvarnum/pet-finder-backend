'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Posts', [{
        color: 'blonde',
        size: 'medium',
        location: '530 Brayford Way, Suwanee, Ga, 30024',
        email: '',
        phoneNumber: '4703368801',
        petName: 'John',
        createdAt: new Date(),
        updatedAt: new Date(),
        postType: 1,
        status: 3,
      },{
        color: 'black',
        size: 'large',
        location: '530 Brayford Way, Suwanee, Ga, 30024',
        email: '',
        phoneNumber: '4703368801',
        createdAt: new Date(),
        updatedAt: new Date(),
        postType: 2,
        status: 2,
      },{
        color: 'white',
        size: 'small',
        location: '530 Brayford Way, Suwanee, Ga, 30024',
        email: '',
        phoneNumber: '4703368801',
        createdAt: new Date(),
        updatedAt: new Date(),
        postType: 2,
        status: 3,
      },{
        color: 'black',
        size: 'medium',
        location: '530 Brayford Way, Suwanee, Ga, 30024',
        email: '',
        phoneNumber: '4703368801',
        petName: 'Daniel',
        createdAt: new Date(),
        updatedAt: new Date(),
        postType: 1,
        status: 3,
      },{
        color: 'white',
        size: 'small',
        location: '530 Brayford Way, Suwanee, Ga, 30024',
        email: '',
        phoneNumber: '4703368801',
        createdAt: new Date(),
        updatedAt: new Date(),
        postType: 2,
        status: 3,
      },{
        color: 'blonde',
        size: 'medium',
        location: '530 Brayford Way, Suwanee, Ga, 30024',
        email: '',
        phoneNumber: '4703368801',
        petName: 'Ben',
        createdAt: new Date(),
        updatedAt: new Date(),
        postType: 1,
        status: 3,
      }])


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
