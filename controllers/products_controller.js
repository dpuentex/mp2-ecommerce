// This controller is used when accessing http://127.0.0.1:3000/products/

// initialize router
const products = require('express').Router()

const bodyParser = require('body-parser')

// import sequelize models
const db = require('../models')

// pull Product model out of sequelize models folder to allow requests later
const { Product } = db

// helper functions
const { Op } = require('sequelize')

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

products.use(bodyParser.json())



//backend response to GET all and serve json on /products/data
products.get('/all', async (req,res) =>{
    let productsData = await Product.findAll() // Product is the sequelize model.. findAll is the method
    res.send(JSON.stringify(productsData)) // running a fetch here will get us our data back as json
})


 
//backend response to GET best sellers and serve json on /products/bestsellers
products.get('/bestsellers/', async (req,res) =>{ 
    let bestSellersData = await Product.findAll({
        where: {
            best_seller: true
        }
    })
    // res.send(JSON.stringify(bestSellersData))
    res.status(200).json(bestSellersData)
    // res.send(bestSellersData)
})



//backend response to GET single and serve json on /products/id/:product_id
products.get('/id/:id', async (req,res) =>{
    let productData = await Product.findByPk(req.params.id)
    res.send(JSON.stringify(productData))
})




//backend response to put on /products/data
products.put('/update/:id', async (req, res) => {
    console.log(req.body)
    try {
        const updatedProduct = await Product.update(req.body, {
            where: {
                product_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated product with id ${req.params.id}`
        })
    } catch(error) {
        res.status(500).json("failed to PUT /products/:id " + error)
    }
})

//backend response to post on /products/data/product_id
products.post('/data', async (req,res) =>{
    // console.log(JSON.stringify(req.body))
    console.log(req.body)
    try {
        let newProduct = await Product.create(req.body) 
        res.status(201).json({
            message: "Successfully created new product",
            data: newProduct
        })
    } catch (error) {
        res.status(500).json("failed to put /products/data " + error)
    }
})


//backend response to DELETE on /products/data/product_id
products.delete('/data/:id', async (req,res) =>{
    try {
        let deletedProduct = await Product.destroy({
            where: {
                product_id: req.params.id
            }
        })
        res.send(JSON.stringify(deletedProduct))
    } catch (error) {
        res.status(500).json("failed to delete /products/data " + error)
    }
})


module.exports = products