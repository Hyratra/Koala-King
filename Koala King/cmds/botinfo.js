const Discord = require('discord.js');

function botinfo(message, client, prefix) {
	if (message.content === prefix + 'botinfo') {
		let embed = new Discord.RichEmbed();
		let bot = client.user
		let member = message.guild.member(bot)
		let name = bot.username
		let id = bot.id
		let cAt = bot.createdAt
		let jAt = member.joinedAt
		let avatar = bot.avatarURL
		embed
			.setTitle('Bot Info')
			.setColor('RANDOM')
			.setThumbnail(avatar)
			.addField('Name :', name)
			.addField('ID :', id)
			.addField('Created at :', cAt)
			.addField('Joined at :', jAt)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed);
	};
};

module.exports = botinfo;