var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var cors = require('cors');

var port = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://jcnamitha27:MongoDb2711@cluster0.sqbhym6.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/public', express.static('public'));
// app.use('/api', api)
// app.use('/public', express.static('public'));
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride("X-HTTP-Method-Override"));
app.use(express.static(__dirname + "/public"));
require("./app/routes")(app);
app.listen(port);
console.log(`App started at port ${port}`);

/**
 * database connection settings
 */
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)
}); // end mongoose connection error

mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);
    } else {
        console.log("database connection open success");
    }
}); // end mongoose connection open handler

exports = module.exports = app;
