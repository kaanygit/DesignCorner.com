const express=require("express");
const app=express();
const mongoose=require("mongoose");
// const cors=require("cors");
app.use(express.json());
const port =5000;

require('dotenv').config();
const connectionUrl=process.env.MONGO_URI;

mongoose.connect(connectionUrl,{useNewUrlParser: true})
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((e)=>console.error(e));

const UserDetailsSchema=new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String
},{
    collection:"UserInfo"
})
const User =mongoose.model("UserInfo",UserDetailsSchema);

app.post("/register",async(req,res)=>{
    const {name,surname,email,password}=req.body;
    try {
        await User.create({
            name,
            surname,
            email,
            password
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status:"error"})
        console.log(error);
    }
})


app.listen(port,()=>{
    console.log("Server Started");
});