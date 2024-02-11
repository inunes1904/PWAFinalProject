const express = require('express');
const router = express.Router()
const CoachModel = require('../models/model');

module.exports = router;

//Post Method
router.post('/coach', async (req, res) => {
    const data = new CoachModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        areas: req.body.areas,
        description: req.body.description,
        hourlyRate: req.body.hourlyRate
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/coach', async (req, res) => {
    try{
        const data = await CoachModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



