const express = require('express');
const router = express.Router()
const CoachModel = require('../models/Coach.js');
const RequestModel = require('../models/request.js');

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

//Get by ID Method
router.get('/coach/:id', async (req, res) => {
    try{
        const data = await CoachModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
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


//Request Routes

// Add a new request to a specific coach
router.post('/request/:id', async (req, res) => {
    const data = new RequestModel({
        coachId: req.params.id,
        userEmail: req.body.userEmail,
        message: req.body.message,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Requests
router.get('/request', async (req, res) => {
    try{
        const data = await RequestModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


