const Discord = require('discord.js');

function google(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'google')) {
		let search = args.join('+');
		if (search) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('Google Search')
				.setColor('RANDOM')
				.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png')
				.addField('Here is your search :', `https://www.google.com/search?q=${search}`)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
			message.channel.send(embed);
		} else {
			return message.reply('you didn\'t specified any search!');
		};
	};
};

module.exports = google;