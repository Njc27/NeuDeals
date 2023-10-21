var mongoose = require("mongoose");
const {imageFiles} = require("../schemas/imageFiles");

module.exports = mongoose.model("ImageFiles",imageFiles);