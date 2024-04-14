'use strict';

const fs = require('fs')
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [
      {
        store_id: 1,
        store_name: 'Door Knobs and Locks',
        icon: Buffer.from(fs.readFileSync(path.resolve(__dirname, './gear-no-attribution.ico'))),
        about_us: 'Founded in 1994 we have been selling random stuff for over 30 years.',
        primary_categories: ['Locks', 'Knobs', 'Fasteners']
      },
      {
        store_id: 2,
        store_name: 'Electronics "R" Us',
        icon: null,
        about_us: "If it's one thing we got it's another thing. Just kidding, it's electronics.",
        primary_categories: ['Chargers', 'Knobs', 'Fasteners']
      },
      {
        store_id: 3,
        store_name: 'Clothing "B" Us',
        icon: null,
        about_us: "If it's one thing we got it's another thing. Just kidding, it's electronics.",
        primary_categories: ['Chargers', 'Knobs', 'Fasteners']
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stores',
      {
        store_id: [1, 2]
      })
  }
};
