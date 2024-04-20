'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true
    },
    product_name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.BLOB
    },
    price: {
      type: DataTypes.DECIMAL(10,2)
    },
    description: {
      type: DataTypes.STRING
    },
    stock: {
      type: DataTypes.DECIMAL(10,0)
    },
    details_object: {
      type: DataTypes.JSON
    },
    best_seller: {
      type: DataTypes.BOOLEAN
    },
    store_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
  });
  return Product;
};