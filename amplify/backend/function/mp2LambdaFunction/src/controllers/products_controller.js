// This controller is used when accessing http://127.0.0.1:3000/products/

// initialize router
const products = require('express').Router()

// import sequelize models
const db = require('../models')

// pull Product model out of sequelize models folder to allow requests later
const { Product } = db

// helper functions
const { Op } = require('sequelize')


//backend response to GET all and serve json on /products/data
products.get('/data', async (req,res) =>{
    let productsData = await Product.findAll() // Product is the sequelize model.. findAll is the method
    res.send(JSON.stringify(productsData)) // running a fetch here will get us our data back as json
})

//backend response to GET products by store and serve json on /products/store/:store
// IE
// http://127.0.0.1:3000/products/store/3

products.get('/store/:storeid', async (req,res) =>{ // req is the request address, req.params is what is after a :
    let storeData = await Product.findAll({ // findAll method again.. but with a parameter
        where: { // where there is a store_id that matches the :storeid parameter in the request
            store_id: req.params.storeid
        }
    })
    res.status(200).json(storeData) // send result 
})

//backend response to GET products by category and serve json on /products/category/:category
products.get('/category/:category', async (req,res) =>{
    console.log(req.query.length)
    let categoryData = await Product.findAll({
        where: {
            category: { // % is wildcard then the category and then the %
                [Op.like]: '%' + req.params.category + '%' // utilize helper method to see for somewhat matches
            }
        }
    })
    res.status(200).json(categoryData)
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

//backend response to get all that match array of ids and serve on /products/productbyarray/:array
//accepts string of numbers seperated by ,

// ie
// http://127.0.0.1:3000/products/productbyarray/1,2,3
products.get('/productbyarray/:array', async (req,res) =>{
    console.log(req.params.array)
    if (req.params.array == null) { // check if param null and then stop
        res.status(400).send('Missing array')
        return 
    }

    array = req.params.array.split(",") // generate array splitting by each comma
    console.log(array)

  
    // adds items to array if they aren't already
    let arrayWithNoRepeats = []
    for(let i = 0; i < array.length; i++){
        if(!arrayWithNoRepeats.includes(array[i])){
            arrayWithNoRepeats.push(array[i])
        }
    }
    // let arrayWithNoRepeats = array.filter((id, index) => {!array.includes(id)})
    
    console.log(arrayWithNoRepeats)


    let productsData = await Product.findAll({
        where: {
            product_id: {
                [Op.in]: arrayWithNoRepeats

            }
        }
    })
    console.log(productsData)
    res.send(JSON.stringify(productsData))
})

//backend response to GET single and serve json on /products/:product_id
products.get('/:id', async (req,res) =>{
    let productData = await Product.findByPk(req.params.id)
    res.send(JSON.stringify(productData))
})


//backend response to GET to search and serve json on /products/search/:product_nameQuery
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



//backend response to POST on /products/data
products.post('/data', async (req,res) =>{
    try {
        let productData = await Product.create(req.body)
        res.send(JSON.stringify(productData))
    } catch (error) {
        res.status(500).json("failed to post /products/data " + error)
    }
})

//backend response to PUT on /products/data/product_id
products.put('/data/:id', async (req,res) =>{
    try {
        let productData = await Product.update(req.body, {
            where: {
                product_id: req.params.id
            }
        })
        res.send(JSON.stringify(productData))
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