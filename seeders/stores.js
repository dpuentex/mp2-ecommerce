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
        image: Buffer.from(fs.readFileSync(path.resolve(__dirname, './harrison-knob.jpg'))),
        about_us: "Founded in 1994 we have been selling random stuff for over 30 years. We're proud to be the only ones who store a photo in our database. ",
        primary_categories: [
          "Straight",
          "Crooked",
          "Curved",
        ],
        best_sellers: [1,4,7,10]
      },
      {
        store_id: 2,
        store_name: 'Electronics "R" Us',
        icon: null,
        image: null,
        about_us: "If it's one thing we got it's another thing. Just kidding, it's electronics.",
        primary_categories: [
          "New",
          "Used",
          "Refurbished",
        ],
        best_sellers: [2,5,8,11]
      },
      {
        store_id: 3,
        store_name: 'Clothing "B" Us',
        icon: null,
        image: null,
        about_us: "We sew for life. We make stuff. We sell stuff.",
        primary_categories: [
          "American",
          "African",
          "Alien",
        ],
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
