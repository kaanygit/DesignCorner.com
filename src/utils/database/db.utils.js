import mongoose from "mongoose";

const connectionToTheDatabase=()=>{
    mongoose.connect('mongodb://localhost:27017/')
}