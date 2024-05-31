const express=require('express')
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecreate = "MynameisEndtoEndYouTubeChannel$#";
const FoodItem = require('../models/FoodCategory'); // Importing FoodItem model from the correct file

router.post("/createuser",
body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','incorrect password').isLength({ min: 5 })
,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);  

    try{ 
       await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})




router.post("/loginuser",
body('email').isEmail(),
body('password','incorrect password').isLength({ min: 5 })
,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
let email=req.body.email;
    try{ 
    let userData = await User.findOne({email});
    if(!userData){
        return res.status(400).json({ errors:'try logging with correct credentials' }); 
    }

    const pwdCompare = await bcrypt.compare(req.body.password,userData.password) 
    if(!pwdCompare){
        return res.status(400).json({ errors:'try logging with correct credentials' }); 
    }

    const data = {
        user:{
            id:userData.id
        }
    }
    const authToken = jwt.sign(data,jwtSecreate);
    return res.json({success:true,authToken})
    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})







router.post("/createfooditem", async (req, res) => {
    try {
      // Extract data from the request body
      const { CategoryName, img, name, description, options } = req.body;
  
      // Create a new food item in the database
      const newFoodItem = await FoodItem.create({
        CategoryName,
        img,
        name,
        description,
        options
      });
  
      // Send a success response
      res.json({ success: true, data: newFoodItem });
    } catch (error) {
      console.error("Error:", error);
      // Send an error response
      res.status(500).json({ success: false, message: "Failed to create food item" });
    }
  });


module.exports = router;
