// this file is not yet in use

// server.js
const express = require('express');
const app = express();

// allows serving distribuion folder, built application
const path = require('path');

// import cross origin resource sharing
const cors = require('cors');

// import sequelize models
const db = require('./models');

// pull Store and Product models out of sequelize models folder to allow requests later
const { Store, Product } = db

// allow cross origin resource sharing
app.use(cors())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "dist")));


// products controller / path
// IE
// http://127.0.0.1:3000/prdoucts
app.use('/products', require('./controllers/products_controller'))

// store controller / path
// IE
// http://127.0.0.1:3000/store
app.use('/store', require('./controllers/store_controller'))


// Handle all other requests and return 
// http://127.0.0.1:3000/ANYTHINGELSEHERE
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// Start the server listening on 3000
app.listen(process.env.PORT || 3000 , () => {
  console.log('Server is listening on port 3000');
});
