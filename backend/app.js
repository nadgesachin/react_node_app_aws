

import express from 'express'
const app = express();
const port = 3002;

import cors from 'cors'

app.use(cors())

// Middleware and other configurations go here
 

// Set up routes for file uploads
// const uploadRoutes = require('./routes/upload');
// app.use('/upload', uploadRoutes);

app.get("/",(req,res)=>{
  res.send("Hello Worls..");
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});