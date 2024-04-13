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
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    product_name: {
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.BLOB)
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
    details_array: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
  });
  return Product;
};