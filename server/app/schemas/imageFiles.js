var mongoose = require("mongoose");

const imageFiles = new mongoose.Schema({
    imageName:{
        type:String,
        required:true
    },
    imagePath:{
        type:String,
        required: true
    },
    imageType: {
        type: String,
        required : true
    },
    imageSize:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = {imageFiles};