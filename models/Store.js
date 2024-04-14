'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init({
    store_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    store_name: {
      type: DataTypes.INTEGER
    },
    icon: {
      type: DataTypes.BLOB
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.BLOB)
    },
    
    about_us: {
      type: DataTypes.TEXT
    },
    primary_categories: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    best_sellers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  }, {
    sequelize,
    modelName: 'Store',
    tableName: 'stores',
    timestamps: false
  });
  return Store;
};