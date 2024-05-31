const express=require('express')
const Order=require('../models/Order');
const router=express.Router();
const signup=require('../models/User')

router.post('/fooddata',(req,res)=>{
    try{
        res.send([global.food_items,global.food_categories])
    }catch(error){
        console.log(error.message);
        res.send('server error');
    }
})

module.exports=router;


// Backend route to fetch orders from MongoDB
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/adminorder',async(req,res)=>{
    try{
        const orders=await Order.find();
        res.json(orders);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('server error');
    }
})


router.get('/usersignups', async (req,res)=>{
    try{
        const signups= await signup.find();
        res.json(signups);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('server error');
    }
})