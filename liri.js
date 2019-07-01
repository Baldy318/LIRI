//Require "dotenv" file
require("dotenv").config(); 

//Require "keys.js" file
var keys = require("./keys.js"); 


// Require Node-Spotify-Api
var Spotify = require("node-spotify-api");

//Require "Axios"
var axios = require("axios");

//Require "moment"
var moment = require("moment");

//To save keys to a variable
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// User Input
var userChoice = process.argv[2];
var userQuery = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    if (i > 4 && i < process.argv.length) {
        userQuery += "+" + process.argv[i]; 
    }
    else {
        userQuery += process.argv[i];
    }
}
//To switch functions/cases
switch (userChoice) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movies();
        break;
    case "do-what-it-says":
        doThis();
        break;
    default:
        console.log("Please enter a valid search, such as {concert-this},");
        console.log("{spotify-this-song}, {movie-this}, or {do-what-it-says}");
        break;
}

//To find concerts
function concertThis() {

    if (!userQuery) {
        userQuery = "";
    }
    axios.get("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {

            console.log("Venue Name: "+ response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Date of the Event: " + moment(response.data[i].datetime).format("L"));
        }
    });
}

//To Search for Songs on Spotify
function spotifyThis() {

    // If the input is empty
    if (!userQuery) {
        userQuery = "The Sign Ace of Base";
    }

    spotify.search({type: "track", query: userQuery}, function(err, data) {
        if (err) {
            console.log(err);
        }

        var userSong = data.tracks.items;
        console.log("Artist: " + userSong[0].artists[0].name);
        console.log("Song Name: " + userSong[0].name);
        console.log("Preview Link: " + userSong[0].preview_url);
        console.log("Album: " + userSong[0].album.name);
    });
};

//To search for movies
function movies() {

    if (!userQuery) {
        userQuery = "The Matrix";
        console.log("If you haven't watched 'The Matrix,' then you should: <http://www.imdb.com/title/tt0485947/>");
        console.log("It's on Hulu!");
    }
    
    axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {

        console.log("Title: " + response.data.Title);
        console.log("Year Released: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating" + response.data.tomatoRating);
        console.log("Country/Countries Produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);
    });
};

//This function 
function doThis () {
    fs.readFile("random.txt", "utf8", function(err, data) {

        if (err) {
            console.log(err);
        }

        var readArray = data.split(",");
        userQuery = readArray[1];
        spotifyThis(userQuery);
    })
};