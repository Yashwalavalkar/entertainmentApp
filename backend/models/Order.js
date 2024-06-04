const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Order', orderItemSchema);
