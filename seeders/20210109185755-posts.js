"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Posts", [
      {
        color: "blonde",
        size: "medium",
        location: "530 Brayford Way, Suwanee, Ga, 30024",
        email: "",
        phoneNumber: "4703368801",
        petName: "John",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostTypeId: 1,
        StatusId: 1,
      },
      {
        color: "black",
        size: "large",
        location: "530 Brayford Way, Suwanee, Ga, 30024",
        email: "",
        phoneNumber: "4703368801",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostTypeId: 2,
        StatusId: 1,
      },
      {
        color: "white",
        size: "small",
        location: "530 Brayford Way, Suwanee, Ga, 30024",
        email: "",
        phoneNumber: "4703368801",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostTypeId: 2,
        StatusId: 2,
      },
      {
        color: "black",
        size: "medium",
        location: "530 Brayford Way, Suwanee, Ga, 30024",
        email: "",
        phoneNumber: "4703368801",
        petName: "Daniel",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostTypeId: 1,
        StatusId: 2,
      },
      {
        color: "white",
        size: "small",
        location: "530 Brayford Way, Suwanee, Ga, 30024",
        email: "",
        phoneNumber: "4703368801",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostTypeId: 2,
        StatusId: 2,
      },
      {
        color: "blonde",
        size: "medium",
        location: "530 Brayford Way, Suwanee, Ga, 30024",
        email: "",
        phoneNumber: "4703368801",
        petName: "Ben",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostTypeId: 1,
        StatusId: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
