let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuidv4'),
    router = express.Router();
const DIR = './public/';


let Product = require('../models/Product');

    const post = async(req,res,next) =>{
    try{
        const url = req.protocol + '://' + req.get('host')
    const prod = new Product({
        _id: new mongoose.Types.ObjectId(),
        prodName:req.body.prodName ,    
        categoryName: req.body.categoryName,
        brandName:req.body.brandName,
        // description: req.body.description,
        desc: req.body.desc,
        actualPrice:req.body.actualPrice,
        discountPrice:req.body.discountPrice,
        userId: req.body.userId,
        image1:req.body.image1,
        image2:req.body.image2,
        image3:req.body.image3,
        image4:req.body.image4,
        addressLine:req.body.addressLine,
        cityName:req.body.cityName,
        zipCode:req.body.zipCode,

    });
    prod.save().then(result => {
        res.status(201).json({
            message: "Product saved successfully!",
            validate:true
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
    }
    catch(error){
        return error;
    }
};


    const getAll = async (req,res,next) =>{
    Product.find().populate('userId').populate('image1').populate('image2').populate('image3').populate('image4').then(data => {
        res.status(201).json({
            message: "Product list retrieved successfully!",
            products: data
        });
    });
};

const getProductById = async(req,res,next) =>{
    try{
        let id = req.params.id
        let prod = await Product.find({_id:id}).populate('image1').populate('image2').populate('image3').populate('image4').exec();
        if(prod.length > 0){
            let similarBrand = await Product.find({brandName:prod[0].brandName}).where('_id').ne(id).populate('image1').populate('image2').populate('image3').populate('image4').exec();
            let similarCategory = await Product.find({categoryName:prod[0].categoryName}).where('_id').ne(id).populate('image1').populate('image2').populate('image3').populate('image4').exec();
            res.status(200).json({
                message: "Product retrieved successfully!",
                product:prod,
                relatedProducts:{
                    similarBrand:similarBrand,
                    similarCategory:similarCategory
                }
            });
        }
        else{
            res.status(200).json({
                message: "A Error Occured"
            })
        }
        
    }
    catch(err){
        res.status(200).json({
            message: err
        }) 
    }
}

const getProductByUser = async(req,res,next) =>{
    try{
        let id = req.params.id
        console.log(id);
        let prod = await Product.find({userId:id}).populate('image1').exec();
        if(prod.length > 0){
            res.status(200).json({
                message: "Product retrieved successfully!",
                product:prod,
            });
        }
        else{
            res.status(200).json({
                message: "No products found"
            })
        }
       
    }
    catch(err){
        res.status(200).json({
            message: err
    })
    }
}

 const deleteProdById =async (req,res) =>{
    try{
        let id = req.params.id;
        console.log(id)
        let prod = await Product.find({_id:id}).exec();
        console.log(prod);
        if(prod.length  === 0 ){
            res.send({
                status:200,
                message:"Product id not present"
            })  
        }
        else {
            let response = await Product.deleteOne({ _id: id});
            if(response.deletedCount === 1){
                res.send({
                    status:200,
                    message:"Product Deleted succesfully"
                })
            }
            else{
                res.send({
                    status:200,
                    message:"A error Occured"
                })
            }
        }
    }
        catch(err){
            console.log(err);
        }
    
}

const updateProductById = async(req,res) =>{
    try{
        let id = req.body.id;
    const resposnce = await Product.findOneAndUpdate({ _id: id},
        {
        prodName:req.body.prodName ,    
        categoryName: req.body.categoryName,
        brandName:req.body.brandName,
        desc: req.body.desc,
        actualPrice:req.body.actualPrice,
        discountPrice:req.body.discountPrice,
        userId: req.body.userId,
        image1:req.body.image1,
        image2:req.body.image2,
        image3:req.body.image3,
        image4:req.body.image4,
        addressLine:req.body.addressLine,
        cityName:req.body.cityName,
        zipCode:req.body.zipCode,
        })
    console.log(resposnce);
    if(!resposnce){
        res.send({
            status:200,
            message:"Product not found"
        }) 
    }
    else if(resposnce){
        res.send({
            status:200,
            message:"Product Updated Succesfully",
            validate:true
        })
    }
    }catch(error){
        res.send({
            status:200,
            error:error
        })
    }
}


module.exports = {
    getAll,
    post,
    getProductById,
    getProductByUser,
    updateProductById,
    deleteProdById

}