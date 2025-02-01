

//Orders always contain either an email or a phone number.
//Contacts are linked if they share the same email or phone number.
//The oldest contact is designated as the Primary Contact, while subsequent contacts are tagged as Secondary Contacts and linked to the Primary Contact.

const express =require("express");
var jwt = require('jsonwebtoken');
const PrimaryContactRoute =express.Router();

PrimaryContactRoute.post("/Login", (req, res)=>{
    try{
        if(!email && !Password) {
            res.status(403).json({msg:"User Not Found"});
        }
    }catch(err){
        res.status(500).json({msg:"Something went wrong"})
    }
})