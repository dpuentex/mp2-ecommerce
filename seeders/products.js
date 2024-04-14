'use strict';

const fs = require('fs');
const { type } = require('os');
const path = require('path');
const { json, DataTypes } = require('sequelize');
const { sequelize } = require('../models');

// Change for how many sets of 3 are seeded. 4 setsresults in 12 products
const howManySets = 30

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      let sets = []
      for (let i = 0; i < howManySets; i++) {
        sets.push({
          product_id: 1 + (i * 3),
          product_name: 'door handle',
          images: null,
          price:69,
          description:"Best door handle you'll ever use",
          stock:47,
          details_object: JSON.stringify({
            color:'black',
            material:'steel'
        })
                //Curly bracket, bracket, curly bracket, parenthese. You see this?
          // the fact that this has to be an object makes me cry
          
          
          
          //'{"{\"KeyA\": 10,\"KeyB\":20}","{\"KeyA\": 100,\"KeyB\":200}"}'
          // [
          //   new Sequelize.JSON("{'color':'black'}"),
          //   new Sequelize.JSON("{'material':'steel'}")
          // ]
          // [
          //   JSON.stringify({'color':'black'}),
          //   JSON.stringify({"material":"steel"})
          // ],
        },
        {
          product_id: 2 + (i * 3),
          product_name: 'door lock',
          images: null,
          price:115,
          description:"Most secure door lock of all time",
          stock:47,
          details_object: JSON.stringify({
            color:"light grey",
            material:"steel",
            size:"large"
          }),
        },
        {
          product_id: 3 + (i * 3),
          product_name: 'door hinge',
          images: null,
          price:54,
          description:"Door Hinge (Legendary)",
          stock:47,
          details_object: JSON.stringify({
            color:"gold",
            material:"brass",
            durability:"high"
          }),
        })
      }
      
      
    

    await queryInterface.bulkInsert('products', sets)
  },

  async down (queryInterface, Sequelize) {
    let idsToDelete = []
    for (let i = 0; i < howManySets; i++) {
      idsToDelete.push(1 + (i * 3), 2 + (i * 3), 3 + (i * 3))
      
    }
    console.log(idsToDelete)

    
    return queryInterface.bulkDelete('products',
      {
        product_id: idsToDelete
      })
  }
};
