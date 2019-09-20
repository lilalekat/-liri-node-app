//Liri.js Environment Variables and Keys. Keys for Spotify API will be stored in the keys.js file//
require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require("fs");

//Varable arguments to be used by the user when enter in the node liri.js commands// 
var liriCommand = process.argv[2];
var userCommand = process.argv[3];

liriStart(liriCommand, userCommand);

//Switch statement used to advise the app which function (liriCommand) to run based off of the user's selection(userCommand)//
function liriStart(liriCommand, userCommand) {
    var errorMessage;

    switch (liriCommand) {
        case "concert-this":
            getBIT(userCommand);
            break;

        case "spotify-this-song":
            getSpotify(userCommand);
            break;

        case "movie-this":
            getOMDB(userCommand);
            break;

        case "do-what-it-says":
            getFs();
            break;

        default:
            errorMessage = "Not a Recognized Command. Please Use One of the Following Commands: concert-this, spotify-this-song, movie-this, or do-what-it-says. Thank You.";
    }
    console.log("..........................................................");
    console.log(errorMessage);
    console.log("..........................................................");
}


//BIT API Function which will spit out the specified search responses to the console.log. Storing values obtained from the API call in a variable, to make storing the results of that call to the log.txt file easier//
function getBIT(artist) {
    var artist = userCommand;
    var bitAPI = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bitAPI).then(function (response) {
        // console.log(response);
        var concertInfo = {
            "Concert Info For:": artist,
            "Venue:": response.data[0].venue.name,
            "Concert Location:": response.data[0].venue.city,
            "Turn-Up Date:": moment(response.data[0].datetime).format("MM-DD-YYYY")
         };

        console.log("..........................................................");
        console.log(concertInfo);
        console.log("..........................................................");

        //Appending API call reulsts to log.txt file, stringifying the data//
        var logtxtBIT = "\nBIT Log Entry: " + JSON.stringify(concertInfo);

        fs.appendFile("log.txt", logtxtBIT + "\n", function (err) {
            if (err) {
                console.log(err);
            }

            else {
                console.log("..........................................................");
                console.log("BIT Info Added.");
                console.log("..........................................................");
            }
        });
    });
};

//Spotify API Function which will spit out the specified search responses to the console.log. Storing values obtained from the API call in a variable, to make storing the results of that call to the log.txt file easier//
function getSpotify(findSong) {
    if (!findSong) {
        findSong = "The Sign";
    };
    console.log("Song Name: " + findSong);

    spotify
        .search({ type: "track", query: findSong })
        .then(function (response) {
            // console.log(JSON.stringify(response));
            var songInfo = response.tracks.items[0];
            var spotifyResponse = {
                "Artist(s):": songInfo.album.artists[0].name,
                "Song Title:": songInfo.name,
                "A preview link of the song from Spotify:": songInfo.preview_url,
                "The album that the song is from:": songInfo.album.name
            };

            console.log("..........................................................");
            console.log(spotifyResponse);
            console.log("..........................................................");

           //Appending API call reulsts to log.txt file, stringifying the data//
        var logtxtSptfy = "\nSpotify Log Entry: " + JSON.stringify(spotifyResponse);

        fs.appendFile("log.txt", logtxtSptfy, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("..........................................................");
                console.log("Spotify Info Added.");
                console.log("..........................................................");
            }
        });
    });
};
    
//OMDB API Function which will spit out the specified search responses to the console.log. Storing values obtaining from the API call in a variable, to make storing the results of that call to the log.txt file easier// 
function getOMDB(movieTitle) {
    var movieTitle = userCommand;
    var omdbAPI = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

    if (!movieTitle)
        var movieTitle = "Mr. Nobody";

    axios.get(omdbAPI).then(function (response) {

        var movieData = {
            "Movie Title:": response.data.Title,
            "Year Made:": response.data.Year,
            "IMDB Rating:": response.data.imdbRating,
            "Those Rotten Tomatoes:": response.data.Ratings[1].Value,
            "Country:": response.data.Country,
            "Language:": response.data.Language,
            "Plot:": response.data.Plot,
            "Actors:": response.data.Actors
        };
        console.log(".................Movie Search In Progress.................");
        console.log(movieData);
        console.log("..........................................................");

        //Appending API call reulsts to log.txt file, stringifying the data//
        var logtxtOMDB = "\nOMDB Log Entry: " + JSON.stringify(movieData);

        fs.appendFile("log.txt", logtxtOMDB, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("..........................................................");
                console.log("OMDB Info Added.");
                console.log("..........................................................");
            }
        });
    });
};

//FS NODE Function - Do What It Says. This function will use the FS Node package to read what's inside the random.txt file and use the appropriate command to call the function within that file//
function getFs() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } 
            console.log(data);

        //Will split the array by commas to make the data more readable//
        var randomArr = data.split(",");
        liriStart(randomArr[0], randomArr[1]);

        console.log("..........................................................");
        console.log(randomArr);
        console.log("..........................................................");
    });

    //Appending API call reulsts to log.txt file, stringifying the data//
    var logtxtFS = "\nFS Log Entry: " + "Calling From Random Text File";

    fs.appendFile("log.txt", logtxtFS, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("..........................................................");
            console.log(".................Getting Random Text......................");
            console.log("..........................................................");
        }
    });
};

