# LIRI
 #LIRI
 
 LIRI is a Language Interpretation and Recognition Interface which will search Spotify for songs, Bands in Town for concerts and OMDB for movies using the parameters listed below.
  
 -concert-this
 -Spotify-this
 -movie-this
 -do-what-it-says

## Command Line Functions

### Concert-This

"Concert-this" used the Bands In Town API to search for an artist and resulted in information about the artist's next event in the terminal.

-Name of the venue
-Venue location
-Date of the Event ("moment" was used to format this as "MM/DD/YYYY")

### Spotify-this

"Spotify-this" used the Spotify API to search for the the details below of an artist.

-Artist(s)
-The song's name
-A preview link of the song from Spotify
-The album that the song is from

### Movie-this

"Movie-this" used the OMDB API to search for various details of a movie listed below which result in the terminal.

-Title of the movie
-Year the movie came out
-IMDB rating of the movie
-Rotten Tomatoes rating of the movie
-Country where the movie was produced
-Plot of the movie
-Actors in the movie

### Do-What-It-Says

LIRI will use the text from “random.txt” and call on of LIRI’s commands. It should run Spotify-this-song for “I want it That way”.

##Technologies Used:

-Spotify API 
-Bands In Town API
-OMDB API
-Node.js
-Javascript
-NPM packages

