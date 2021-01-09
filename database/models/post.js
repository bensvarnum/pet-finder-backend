'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.PostTypes.hasMany(models.Post);
      models.Post.belongsTo(models.PostTypes);

      models.Status.hasMany(models.Post);
      models.Post.belontsTo(models.Status);
    }
  };
  Post.init({
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    location: DataTypes.STRING,
    petName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};