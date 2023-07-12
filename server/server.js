// const fs =require('fs');
const { MongoClient } = require('mongodb');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const port = 5000;

require('dotenv').config();


const uri = process.env.MONGO_URI; // MongoDB Atlas URI
const client=new MongoClient(uri);

app.use(express.json());

const dataModel = mongoose.model('Veri', new mongoose.Schema({
    key: Number,
    name: String,
    imageUrl: String,
    price: Number,
    discountRate: Number,
    productInformation: String
  }));

app.get('/',async(req,res)=>{
    try{
        const veriler = await dataModel.find();
        res.render('index', { veriler });
        console.log('basarili')
    }catch(error){
        console.error('Veri çekme hatası:', error);
        res.status(500).send('Bir hata oluştu');
    }
})


// MONGO DATA GET
app.get('/api/data',async(req,res)=>{
    try{
        const collection=client.db('Category').collection('Products');
        const result=await collection.find().toArray();
        res.json(result);
    }catch(error){
        console.log('Error retrieving data from MongoDB:', error);
        res.status(500).json({error:'Server error'});
    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});






// MONGODB WRİTE
// (async()=>{
//     try{
//         await client.connect();
//         console.log('Connected to MongoDB');

//         const jsonData=fs.readFileSync('../src/slider.products.json');
//         const data=JSON.parse(jsonData);

//         const collection=client.db('Category').collection('Products');
//         const result=await collection.insertMany(data);
//         console.log('Data inserted into MongoDB:', result.insertedCount);
//     }catch(error){
//         console.log('MongoDB connection error: ',error);
//     }
// })();
