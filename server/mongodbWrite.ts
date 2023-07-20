const mongoose = require('mongoose');
const fs = require('fs');


require('dotenv').config();

const connectionURL = process.env.MONGO_URI;

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB\'ye bağlanti başarili!');

    const productSchema= new mongoose.Schema({
        key:Number,
        name:String,
        imageUrl:String,
        price:Number,
        discountRate:Number,
        productInformation:String
    })
    const Product=mongoose.model('products',productSchema);

    const jsonData = fs.readFileSync('../src/slider.products.json');
    const data = JSON.parse(jsonData);

    data.forEach(item => {
        const product=new Product({
            key:item.key,
            name:item.name,
            imageUrl:item.imageUrl,
            price:item.price,
            discountRate:item.discountRate,
            productInformation:item.productInformation
        });
        
        product.save()
        .then(()=>{
            console.log('Ürün kaydedildi:');
        })
        .catch(error=>{
            console.error('Ürün kaydedilemedi:', error)
        });
    }); 
  })
  .catch((error) => {
    console.error('MongoDB\'ye bağlantı hatası:', error);
  });
