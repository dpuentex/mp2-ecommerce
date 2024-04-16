//sequelize model:generate --name products --attributes "product_id:integer, product_name:string, images:blob, price:decimal(10,2), description:string, stock:decimal(10,0), details_array:json" --force true
//sequelize model:generate --name products --attributes "product_id:integer, product_name:string, images:blob, price:decimal, description:string, stock:decimal, details_array:json" --force true


'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      product_name: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.BLOB)
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      description: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.DECIMAL(10, 0)
      },
      details_object: {
        type: Sequelize.JSONB
      },
      category: {
        type: Sequelize.STRING
      },
      best_seller: {
        type: Sequelize.BOOLEAN
      },
      store_id: {
        type: Sequelize.BIGINT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
}