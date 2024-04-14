'use strict';

const fs = require('fs')
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [
      {
        store_id: 1,
        store_name: 'Door Knobs "N"Locks',
        icon: Buffer.from(fs.readFileSync(path.resolve(__dirname, './gear-no-attribution.ico'))),
        images: null,
        about_us: 'Founded in 1994 we have been selling random stuff for over 30 years.',
        primary_categories: ['Locks', 'Knobs', 'Fasteners'],
        best_sellers: [1,4,7,10]
      },
      {
        store_id: 2,
        store_name: 'Electronics "R" Us',
        icon: null,
        images: null,
        about_us: "If it's one thing we got it's another thing. Just kidding, it's electronics.",
        primary_categories: ['Chargers', 'Wires', 'Tools'],
        best_sellers: [2,5,8,11]
      },
      {
        store_id: 3,
        store_name: 'Clothing "B" Us',
        icon: null,
        images: null,
        about_us: "If it's one thing we got it's another thing. Just kidding, it's electronics.",
        primary_categories: ['Hoodies','Shoes','Pants'],
        best_sellers: [3,6,9,12]
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stores',
      {
        store_id: [1, 2, 3]
      })
  }
};
