const mongoose =require("mongoose");
//const MONGO_URL =process.env.MONGO_URL;
//Connecting to Local Database
const connectToDb = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/empher")
      console.log("Connect to Database");
    }catch(err){
       console.log("Failed to Conneted to Database")
    }
}
module.exports =connectToDb;