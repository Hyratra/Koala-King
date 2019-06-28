const Discord = require('discord.js');

function say(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'say')) {
		let text = args.join(' ');
		if (!text) {
			message.channel.send(':no_entry: You didn\'t wrote the text that you want the bot say.');s
		}
		if (text) {
			message.channel.send(text);
		};
	};
};

module.exports = say;