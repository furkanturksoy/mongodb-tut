var mongoose = require("mongoose");

// Connecto to mongodb

mongoose.connect("mongodb://localhost/databasename");
// if the databasename doesn't exist it creates one 
// else it will connect the existing one

mongoose.connect.once("open", callbackfunc).on("err");

// we can chain new events to the returning object 
//this will run the callback once it connects to the db 



