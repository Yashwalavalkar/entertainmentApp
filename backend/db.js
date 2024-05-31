require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
 
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');

        // Define mongoose models for your collections
        const FoodItemModel = mongoose.model('FoodItem', mongoose.Schema({}), 'food_items');
        const FoodCategoryModel = mongoose.model('FoodCategory', mongoose.Schema({}), 'foodCategory');

        // Fetch data from the collections
        const foodItems = await FoodItemModel.find({});
        const foodCategories = await FoodCategoryModel.find({});

        // Assign fetched data to global variables
        global.food_items = foodItems;
        global.food_categories = foodCategories;

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDB;
