const Discord = require('discord.js');

function tenor(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'tenor')) {
		let search = args.join('-');
		if (search) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('Tenor Search')
				.setColor('RANDOM')
				.setThumbnail('https://tenor.com/assets/img/tenor-app-icon.png')
				.addField('Here is your search :', `https://www.tenor.com/search/${search}`)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
			message.channel.send(embed);
		}
	};
};

module.exports = tenor;