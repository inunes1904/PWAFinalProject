const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

require('dotenv').config();
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

// Displays error if connection not sucessful
database.on('error', (error) => {
    console.log(error)
})
// Displays message if connection is successful
database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Server is running');
    console.log('http://localhost:3000/');
})