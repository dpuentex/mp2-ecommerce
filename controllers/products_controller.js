const products = require('express').Router()
const db = require('../models')
const { Product } = db

// products.get('/', async (req,res) =>{
//     res.render()
// })

products.get('/products-data', async (req,res) =>{
    let productsData = await Product.findAll()
    res.send(JSON.stringify(productsData))
})

module.exports = products