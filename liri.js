// NPM - Spotify, Twitter, Request, and the core node package fs
var fs = require("fs");
var spotify = require("node-spotify-api");
var twitter = require("twitter");
var request = require("request");

// Retrieve sign-in data from keys.js file
var config = require('./keys.js');

// Getting library from Twitter consructor
var client = new twitter(config);

// Parameters search for my profile username and last 20 tweets
var params = { screen_name: 'isenberg_jordan',
	count: 20 };
console.log(params);

// Grabs tweet statuses from the user timeline under the parameters
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	for (var i = 0; i <tweets.length; i++) {
		// Prints each tweet to console
		console.log(tweets[i].text);
	}
});