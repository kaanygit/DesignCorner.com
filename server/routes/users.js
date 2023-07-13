const router=require('express').Router();
const {User,validate}=require('../models/userSchema');
const bcrypt=require('bcrypt');

router.post("/",async(req,res)=>{
    try {
        const {error}=validate(req.body);
        if(error) {
            return res.status(400).send({message:error.details[0].message});
        }
        const user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(409).send({message:"bu email daha önce alındı"});
        }
        const salt=await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"USER BAŞARILI ŞEKİLDE OLUŞTU"});

    } catch (error) {
        console.log("Error: ",error);
        res.status(500).send({message:"SERVER HATASI"});
    }
})

module.exports=router;