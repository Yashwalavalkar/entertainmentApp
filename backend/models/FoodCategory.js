const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new Schema({
    half: {
        type: String,
        required: true
    },
    full: {
        type: String,
        required: true
    }
});



const FoodSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [OptionSchema],
    description: {
        type: String,
        required: true
    }
});
// Specify the collection name explicitly
module.exports = mongoose.model('food_items', FoodSchema);
