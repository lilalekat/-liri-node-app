# liri-node-app

<strong>How It Works</strong>
<br>Based off of Node.js, the Liri Node App functions off of a user's input from the command line to pull specific sets of data. Integrating with Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules, the Liri Node App uses API calls to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. After parsing through the information that is returned from the API calls, the data is returned in a specfic format in JSON objects. 

<strong>Technologies Used</strong>
<br>Node.js
<br>JavaScript
<br>Bands In Town API (via the Axios NPM Module)
<br>Spotify API (via the Spotify NPM Module)
<br>OMDb API (via Axios npm module)
<br>Moment NPM Module
<br>DotEnv NPM Module

<strong>How the App Works</strong>
<br>Depending on the command used, 'concert-this', 'spotify-this-song', 'movie-this', or 'do-what-it-says', the Liri Node App can:

(1) Search and display band/concert information<br>
(2) Seach and display Spotify information for a Song or Artist<br>
(3) Search and Display OMDb lookup for a movie, and (4) read command and query from another file<br>

<br>Take a look at the example below
