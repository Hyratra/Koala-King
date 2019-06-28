const Discord = require('discord.js');

function imgur(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'imgur')) {
		let search = args.join('%20');
		if (search) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('Imgur Search')
				.setColor('RANDOM')
				.setThumbnail('https://s.imgur.com/images/logo-1200-630.jpg?2')
				.addField('Here is your search :', `https://www.imgur.com/search?q=${search}`)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
			message.channel.send(embed);
		}
	};
};

module.exports = imgur;