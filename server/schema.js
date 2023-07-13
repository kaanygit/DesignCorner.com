const mongoose=require('mongoose');

const ProductDetails=new mongoose.Schema(
    {
        key: Number,
        name: String,
        imageUrl: String,
        price: Number,
        discountRate: Number,
        productInformation: String
    },
    {
        collection:'Products'
    }
);
const ProductSchema=mongoose.model("Products",ProductDetails)
module.export=ProductSchema;


const userSchema=new mongoose.Schema({
    name:String,
    email:String
  });
const UserSchema=mongoose.model('User',userSchema);
module.exports=UserSchema;