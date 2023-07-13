const mongoose =require('mongoose');
const express= require('express');
const port=8080;
const app=express();
var cors = require('cors');
app.use(cors());

require('dotenv').config();
const connectionUrl=process.env.MONGO_URI;

mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });


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
      collection:'products'
  }
);
const ProductSchema=mongoose.model("products",ProductDetails)

app.get('/products', (req, res) => {
  ProductSchema.find().exec()
    .then(product => {
      res.header( "Access-Control-Allow-Origin" );
      res.send(product);
      console.log('users: ',product);
    })
    .catch(err => {
      console.error('Kullanıcılar alınamadı:', err);
      res.status(500).send('Sunucu hatası');
    });
});

app.listen(port,()=>{
  console.log(`Sunucu ${port} portunda çalışıyor`);
});