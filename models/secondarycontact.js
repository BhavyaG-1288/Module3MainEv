const mongoose =require("express");
//email
//phoneNumber
//isPrimary (Boolean, always true).
//secondaryContactIds (Array of references to SecondaryContact documents).
const SecondaryContactSchema = new mongoose.Schema({
    email:{type:String},
    phoneNumber:{type:Boolean},
    isPrimary:{type:Boolean, require:false},
   
})
const SecondaryContactModel= mongoose.model("SecondaryContact",  SecondaryContactSchema);

module.exprots =SecondaryContactModel;