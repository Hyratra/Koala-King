const Discord = require('discord.js');

function sayembed(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'embed')) {
		let text = args.join(' ');
		if (!text) {
			message.channel.send(':no_entry: You didn\'t wrote the embed that you want the bot say.');
		}
		if (text) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle(`${message.author.username} says :`)
				.setColor('RANDOM')
				.setDescription(`${text}`)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed);
		};
	};
};

module.exports = sayembed;