let Images = require('../models/images');
const {fileSizeFormatter} = require("../../utils/commonFunctions");


const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
    cloud_name: "dwf2vdotu",
    api_key: "331546527277163",
    api_secret: "ot3VuaencN4y4VNj0JYRtwZhMgM"
  });
  



const uploadImage = async (req,res,next) =>{
    console.log(req);
    try{
        const data = {
            image: req.file.path
        }
        cloudinary.uploader.upload(data.image)
        .then((result)=>{
            const image = new Images({
                imageName:req.file.originalname,
                imagePath:req.file.path,
                imageType:req.file.mimetype,
                imageSize:fileSizeFormatter(req.file.size,2),
                imageUrl:result.url
            });
            image.save().then(result=>{
                res.status(201).json({
                    message: "Image Upload successfully!",
                    data:result._id
                })
            }).catch(error=>{
                res.status(500).json({
                    error: error
                });                
            })
            });   
    }
    catch(error){
        console.log(error);
    }
};

const getImages = async (req,res,next) =>{
    Images.find().then(data => {
        res.status(200).json({
            message: "Image list retrieved successfully!",
            users: data
        });
    });
};


module.exports = {
    uploadImage,
    getImages,
}