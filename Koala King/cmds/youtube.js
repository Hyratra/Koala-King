const Discord = require('discord.js');

function youtube(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'youtube')) {
		let search = args.join('+');
		if (search) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('Youtube Search')
				.setColor('RANDOM')
				.setThumbnail('https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png')
				.addField('Here is your search :', `https://www.youtube.com/results?search_query=${search}`)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
			message.channel.send(embed);
		}
	};
};

module.exports = youtube;