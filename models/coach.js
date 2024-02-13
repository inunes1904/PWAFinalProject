const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    areas: {
        required: true,
        type: [String]
    },
    description: {
        required: true,
        type: String
    },
    hourlyRate: {
        required: true,
        type: Number
    }
})

exports.CoachModel = mongoose.model('Coach', dataSchema)