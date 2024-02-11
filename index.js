const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Server is running');
    console.log('http://localhost:3000/');
})