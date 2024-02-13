const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    coachId: {
        required: true,
        type: String
    },
    userEmail: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }

})

module.exports = mongoose.model('Request', dataSchema)