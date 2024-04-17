const users = require('express').Router()
const db = require('../models')
const { Cart } = db
const { Op } = require('sequelize')

// All these routes begin with /carts.. you don't have to type that though
// You may use /carts/data... maybe. but if you do you'd only type /data

// if you want read this with me https://developers.google.com/identity/sign-in/web/server-side-flow

//to do list 
// CRUD lol.
// refer to products controller use split screen if you want
// I do not need a search function for cart
// I do need

let cartItems = [];
// Create (POST) on /users/cartItems
users.post('/cartItems', (req, res) => {
   const { name, vendor } = req.body;
   if (!name || !vendor) {
    return res.status(400).send('Missing name or vendor');
   }
   const newProduct = { id:cartItems.length + 1, name, vendor};
   users.push (newProduct);
   res.status(201).send(newProduct);
});
// Read (GET) on /users/cartItems/:id
users.get('/cartItems', (req, res) => {
    res.json(products);
});
users.get('/cartItems/:id', (req, res) => {
    const product = products.find
});
// Update (PUT) on /users/cartItems/:id
users.put('/cartItems/:id', (req, res) => {

});
// Delete (DELETE) on /users/cartItems/:id
users.delete('/cartItems/:id', (req, res) => {

});