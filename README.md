# liri-node-app

<strong>The Liri Node App</strong>
___________
<br>Based off of Node.js, the Liri Node App functions off of a user's input from the command line to pull specific sets of data. Integrating with Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules, the Liri Node App uses API calls to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. After parsing through the information that is returned from the API calls, the data is returned in a specfic format in JSON objects. 

<strong>How the App Works</strong>
___________
<br>First things first, to use this App, please use the 'npm install' command via the Terminal to install the appropriate NPM packages.
Based off of the user entering one of the commands below:<br>
`concert-this`, `spotify-this-song`, `movie-this`, or `do-what-it-says`<br>

The Liri Node App can:

(1) Search and display band/concert information<br>
(2) Seach and display Spotify information for a Song or Artist<br>
(3) Search and Display OMDb lookup for a movie, **AND** <br>
(4) Read Command and Query from another file<br>

To see how the Liri Node App works, take a look at the Demo below:<br>
![Liri Node App Demo](LiriNodeAppDemo.gif)

<strong>The Liri Node App Was Built With the Following Technologies</strong>
___________
- Node.js
- JavaScript
- Bands In Town API (via the Axios NPM Module)
- Spotify API (via the Spotify NPM Module)
- OMDb API (via Axios npm module)
- Moment NPM Module
- DotEnv NPM Module


