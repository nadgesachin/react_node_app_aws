const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables from a .env file
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes


app.get('/',(req,res)=>{
    res.send("Hello Pat");
})

// Start the server
const PORT =3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
