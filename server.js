// this file is not yet in use

// server.js
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const db = require('./models');
const { Store } = db

// Serve the static files from the React app
app.use(cors())
app.use(express.static(path.join(__dirname, "dist")));



app.get('/about-us-data', async (req,res) =>{
  let storeData = await Store.findAll()
  res.send(JSON.stringify(storeData))
})

// Handle all other requests and return 
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the server
app.listen(3001 || process.env.PORT, () => {
  console.log('Server is listening on port 3001');
});
