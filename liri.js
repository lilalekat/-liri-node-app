require("dotenv").config();

//The below code will import the keys.js file and store it in a variable named 'keys'//
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


