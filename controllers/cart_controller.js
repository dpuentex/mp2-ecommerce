const products = require('express').Router()
const db = require('../models')
const { Cart } = db
const { Op } = require('sequelize')

//backend response get all and serve json on /carts/data
carts.get('/data', async (req,res) =>{
    let cartsData = await Cart.findAll()
    res.send(JSON.stringify(cartsData))
})


//to do list 
// CRUD lol.
// refer to products controller use split screen if you want
// I do not need a search function for cart
// I do need

// Create (POST)
// Read (GET)
// Update (PUT)
// Delete (DELETE)