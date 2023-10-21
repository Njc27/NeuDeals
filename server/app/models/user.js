var mongoose = require("mongoose");

module.exports = mongoose.model("User",{
    // id:{type:Number,required:true,unique:true},
    fname:{type:String,required:true},
    lname:{type:String,reuired:true},
    email:{type:String,required: true,
        unique: true},
    phoneNumber:{type:String,required:true},
    address:{type:String,required:true},
    password:{type:String, required:true}
});