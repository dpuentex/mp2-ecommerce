// this file is not yet in use

// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname)));

// Handle all other requests and return hi
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

// Start the server
app.listen(3001 || process.env.PORT, () => {
  console.log('Server is listening on port 3001');
});
