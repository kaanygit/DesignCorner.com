const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const passwordComplexity=require('joi-password-complexity');
const Joi = require('joi');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    return token;
};

const User=mongoose.model("user",userSchema);
const validate=(data)=>{
    const schema=Joi.object({
        name:Joi.string().required().label("Name"),
        surname:Joi.string().required().label("Surname"),
        email:Joi.string().required().label("Email"),
        Password:passwordComplexity().require().label("Password"),
    });
    return schema.validate(data);
};

module.exports={User,validate};