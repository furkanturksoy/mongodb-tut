var MarioChar = require("modelpath");

//theese methods are used directly on the model instance whereas .save() method is used on the new mariochar instance


var Char = new MarioChar() // this is a new instance
Char.save() // save is used on this instance


// find(criteria) returns multiple results

MarioChar.find({name : "mario"})  //if we don't pass any criteria it will return all
.then(function(result){}); // requests to the database are async that's why we are creating promises to run once we receive the data





// findOne(criteria) returns only one result

MarioChar.findOne({name : "mario"})  //if we don't pass any criteria it will return all
.then(function(result){}); // requests to the database are async that's why we are creating promises to run once we receive the data