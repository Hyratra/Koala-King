const Discord = require('discord.js');


async function ping(message, client, prefix){
	if (message.content === prefix + 'ping'){

		const m = await message.channel.send('Processing...');

		let embed = new Discord.RichEmbed()
		embed
			.setTitle('Pong!')
			.setColor('RANDOM')
			.addField('Latency :', `${m.createdTimestamp - message.createdTimestamp}ms`)
			.addField('API Latency :', `${Math.round(client.ping)}ms`)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed)	
		m.delete()
	};
};

module.exports = ping;