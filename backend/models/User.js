//it is used to interact with the mongodb
const mongoose=require('mongoose'); 
const {Schema}=mongoose;
//creating a user schema that create a user structure 
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 

module.exports=mongoose.model('user',UserSchema)
