//sequelize model:generate --name stores --attributes "store_id:integer, store_name:string, icon:blob, about_us:string" --force true

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores', {
      store_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_name: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.BLOB
      },
      about_us: {
        type: Sequelize.TEXT
      },
      best_selling_categories: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stores');
  }
};