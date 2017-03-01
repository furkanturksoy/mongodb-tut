// updating by single instance 

var Char = new MarioChar()

Char.update("parameters we want to change")


// updating by main instance

MarioChar.findOneAndUpdate("criteria" , "parameters we want to change");


// update operators
// increments the weight by one 

MarioChar.findOneAndUpdate("criteria" , {$inc:{weight:1}}).then();

