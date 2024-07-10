const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
        min: [0],
    },
    year: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    introduce: {
        type: String,
    }
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Movie', movieSchema);