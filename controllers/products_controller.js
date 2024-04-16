const products = require('express').Router()
const db = require('../models')
const { Product } = db
const { Op } = require('sequelize')

// the '/' route is already used for main page.. automatically served through react router dom

//backend response to GET all and serve json on /products/data
products.get('/data', async (req,res) =>{
    let productsData = await Product.findAll()
    res.send(JSON.stringify(productsData))
})

//backend response to GET products by store and serve json on /products/store/:store
products.get('/store/:store', async (req,res) =>{
    let storeData = await Product.findAll({
        where: {
            store_id: req.params.store
        }
    })
    res.status(200).json(storeData)
})

//backend response to GET products by category and serve json on /products/category/:category
products.get('/category/:category', async (req,res) =>{
    console.log(req.query.length)
    let categoryData = await Product.findAll({
        where: {
            category: {
                [Op.like]: '%' + req.params.category + '%'
            }
        }
    })
    res.status(200).json(categoryData)
})

//backend response to GET best sellers and serve json on /products/bestsellers
products.get('/bestsellers', async (req,res) =>{
    let bestSellersData = await Product.findAll({
        where: {
            best_seller: true
        }
    })
    res.send(JSON.stringify(bestSellersData))
})

//backend response to get all that match array of ids and serve on /products/retrievecartbyarray/:array
//accepts string of numbers seperated by ,

products.get('/productbyarray/:array', async (req,res) =>{
    console.log(req.params.array)
    if (req.params.array == null) {
        return res.status(400).send('Missing array')
    }

    array = req.params.array.split(",")
    console.log(array)

    let arrayWithNoRepeats = array.filter((id, index) => array.indexOf(id) === index)


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