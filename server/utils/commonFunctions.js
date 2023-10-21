let Images = require('../app/models/images');

const fileSizeFormatter = (bytes,decimal) =>{
    if(bytes === 0){
    return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes','KB','MB','GB','TB','PB','EB','YB','ZB'];
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000,index)).toFixed(dm)) + '-' + sizes[index]
}

const saveImageArray = async (array) =>{
    let imageArray = [];
    await Promise.all(
        array.map(img =>{
            const imageCol = new Images({
                imageName:img.originalname,
                    imagePath:img.path,
                    imageType:img.mimetype,
                    imageSize:fileSizeFormatter(img.size,2)
            });
            imageCol.save().then(result =>{
                console.log(result._id)
                imageArray.push(result._id)
            }).catch(err =>{
                console.log(err)
            })
            
        })
    )
    return imageArray;
}

module.exports = {
    fileSizeFormatter,
    saveImageArray
}