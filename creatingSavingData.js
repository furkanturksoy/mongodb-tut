var MarioChar = require("pathformodel");

// creating a new character
var Char = new MarioChar({
    name : "Mario",
    weight : 50
});

// this method saves the Char directly to the database

Char.save();