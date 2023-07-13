const mongoose=require('mongoose');

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.MONGO_URI,connectionParams);
        console.log("Connect to Database success");
    } catch (error) {
        console.log("Could not connect to database : ",error);
    }
}