require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors')
const port=8080;
const connectDatabase=require("./database");
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');


connectDatabase();

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);


app.listen(port,()=>console.log(`Sunucu ${port} portunda çalışıyor`));