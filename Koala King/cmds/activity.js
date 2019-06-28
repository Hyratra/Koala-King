const Discord = require('discord.js');


function activity(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);
	let args2 = messageArray.slice(2);

	if(message.content.startsWith(prefix + 'activity')) {
		const act = args.join(' ');
		if (!act) {
			message.channel.send(':no_entry: You didn\'t specified the activity to set to the bot.');
		}
		if (act) {
			message.channel.send(`The bot has successfully changed it's activity to ${act}!`);
			client.user.setActivity(act)
		};
	};
}; /** message.reply('you didn\'t specified the activity to set to the bot.');
	*  message.channel.send(`The bot has successfully changed it's activity to ${activity}!`);
	*  message.reply('you didn\'t specified an object to configurate.');
	*/

module.exports = activity;