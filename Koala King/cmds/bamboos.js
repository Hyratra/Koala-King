const Discord = require('discord.js');
const fs = require('fs');

function bamboos(message, client, prefix) {
	if (message.content === prefix + 'bamboos') {
		const countfile = 'C:/Users/Evan/Desktop/Languages/JavaScript/Koala King/counter.json';
		const bamc = JSON.parse(fs.readFileSync(countfile, "utf8"));

		let embed = new Discord.RichEmbed();

		embed
			.setTitle('Bamboos')
			.setColor('RANDOM')
			.addField('The number of bamboos in this server is :', `**__${bamc.count}__ bamboos**.`)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed);
	};		
};

module.exports = bamboos;