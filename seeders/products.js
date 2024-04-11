'use strict';

const fs = require('fs')
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        product_id: 1,
        product_name: 'door handle',
        images: null,
        price:69,
        description:"Best door handle you'll ever use",
        stock:47,
        details_array:'{"color":"black","material":"steel"}',
      },
      {
        product_id: 2,
        product_name: 'door lock',
        images: null,
        price:115,
        description:"Most secure door lock of all time",
        stock:47,
        details_array:'{"color":"light grey","material":"steel", "size":"large"}',
      },
      {
        product_id: 3,
        product_name: 'door hinge',
        images: null,
        price:54,
        description:"Door Hinge (Legendary)",
        stock:47,
        details_array:'{"color":"gold","material":"brass", "durabilty":"high"}',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products',
      {
        product_id: [1]
      })
  }
};
