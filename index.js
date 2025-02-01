const express =require("express");
const connectToDb = require("../../config");
const app= express();
const PORT =process.env.PORT;
//Middileware
app.use(express.json());



//Creating sample Route
app.get("/", (req,res)=>{
    console.log("This is Test Route");
})
app.use("/PrimaryContact", PrimarycontactRoute);

//Port 

app.listen(PORT, ()=>{
    connectToDb();
    console.log("Server started")
})