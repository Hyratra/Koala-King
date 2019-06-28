const Discord = require('discord.js');

function giphy(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'giphy')) {
		let search = args.join('-');
		if (search) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('Giphy Search')
				.setColor('RANDOM')
				.setThumbnail('https://giphy.com/static/img/giphy_logo_square_social.png')
				.addField('Here is your search :', `https://www.giphy.com/search/${search}`)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
			message.channel.send(embed);
		}
	};
};

module.exports = giphy;