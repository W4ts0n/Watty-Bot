//Install node.js
//npm init
//npm install discord.js --save

const Discord = require('discord.js');
const bot = new Discord.Client();
var botToken = require('./token');

var helpResponses = [
	'No', 
	'Leave me alone', 
	'No help available'
];

var factsResponses = [
	'Josh does not know how investing works', 
	'Dark Spirit Panpipes Has Died', 
	'Everybody hates Hal'
];

bot.on('message', (message) => {

	if(message.content == '!help') {
		message.channel.send(helpResponses[randResponse(helpResponses.length)]);
	}

	if(message.content == '!facts') {
		message.channel.send(factsResponses[randResponse(factsResponses.length)]);
	}

});

function randResponse(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}

bot.login(botToken.token);