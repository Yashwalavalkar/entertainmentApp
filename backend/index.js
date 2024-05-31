require('dotenv').config();
const express = require('express');
const app = express();
const port =process.env.PORT;
const mongoDB = require('./db');
const cors=require('cors');
// Connect to MongoDB
    mongoDB(); 
     
// Refresh food items data every 5 seconds 
             
app.use(cors());
// Middleware to allow requests from http://localhost:3000
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    ); 
    next();
});

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello, Yash!');
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});