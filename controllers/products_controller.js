const products = require('express').Router()
const db = require('../models')
const { Product } = db
const { Op } = require('sequelize')

// the '/' route is already used for main page.. automatically served through react router dom

//backend response to GET all and serve json
products.get('/data', async (req,res) =>{
    let productsData = await Product.findAll()
    res.send(JSON.stringify(productsData))
})


//backend response to GET single and serve json
products.get('/:id', async (req,res) =>{
    let productData = await Product.findByPk(req.params.id)
    res.send(JSON.stringify(productData))
})


//backend response to GET to search and serve json
products.get('/search/:query', async (req,res) =>{
    console.log(req.query.length)
    let searchData = await Product.findAll({
        where: {
            product_name: {
                [Op.like]: '%' + req.params.query + '%'
            }
        }
    })
    res.status(200).json(searchData)
})



//backend response to POST 
products.post('/data')


module.exports = products