
const mongoose =require("express");
//email
//phoneNumber
//isPrimary (Boolean, always true).
//secondaryContactIds (Array of references to SecondaryContact documents).
const PrimarycontactSchema = new mongoose.Schema({
    email:{type:String},
    phoneNumber:{type:Boolean},
    isPrimary:{type:Boolean, require:true},
   
})
const PrimarycontactModel= mongoose.model("Primarycontact", PrimarycontactSchema);

module.exprots =PrimarycontactModel;