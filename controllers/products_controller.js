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

//backend response to GET all and serve json on /products/data/category/:category
// products.get('/data/category/:category', async (req,res) =>{
    
//     let productsData = await Product.findAll({
//         where: {
//             details_array: {
//                 [Op.in]: req.params.array
//             }
//         }
//     })
//     res.send(JSON.stringify(productsData))
// })

//backend response to get all that match array of ids and serve on /products/retrievecartbyarray/:array

products.get('/retrievecartbyarray/:array', async (req,res) =>{

    productIdArray = req.params.array.split(",")
    let productsData = await Product.findAll({
        where: {
            product_id: {
                [Op.in]: productIdArray
            }
        }
    })
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