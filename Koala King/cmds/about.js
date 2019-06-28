const Discord = require('discord.js');

function about(message, client, prefix) {
	if (message.content === prefix + 'about') {
		let embed = new Discord.RichEmbed();
		let bot = client.user;
		let icon = bot.avatarURL;
		embed
			.setTitle('About this bot')
			.setThumbnail(icon)
			.setColor('RANDOM')
			.addField('Creator :', '@A french koala#6855')
			.addField('Bot creation :', 'Friday, June 21st, 2019')
			.addField('Helper(s) :', '@Greep#3022')
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed);	
	};
};

module.exports = about;