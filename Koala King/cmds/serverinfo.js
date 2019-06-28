const Discord = require('discord.js');

function serverinfo(message, client, prefix) {
	if (message.content === prefix + 'serverinfo') {
		let embed = new Discord.RichEmbed();
		let guild = message.guild;
		let name = guild.name;
		let id = guild.id;
		let cAt = guild.createdAt;
		let owner = guild.owner;
		let acronym = guild.nameAcronym;
		let icon = guild.iconURL;
		embed
			.setTitle('Server Info')
			.setColor('RANDOM')
			.setThumbnail(icon)
			.addField('Name :', name)
			.addField('Acronym :', acronym)
			.addField('ID :', id)
			.addField('Created at :', cAt)
			.addField('Owner :', `${owner.user.username}`)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed);
	};
};

module.exports = serverinfo;