//dependencies.. name router stores
const stores = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
// pull Store from db
const { Store } = db

//export router to be used in server
module.exports = stores

// get /stores/ to return all
stores.get('/', async (req,res) =>{
    let storesData = await Store.findAll()
    res.send(JSON.stringify(storesData))
})

// get /stores/:store_id to return single
stores.get('/:id', async (req,res) =>{
    let storeData = await Store.findByPk(req.params.id)
    res.send(JSON.stringify(storeData))
})
