var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create schema and model


var MarioChar = new Schema({
    name : String,
    weight : Number

});

//creating model 

var MarioCharModel = mongoose.model("mariochar", MarioChar)

module.exports = MarioCharModel;