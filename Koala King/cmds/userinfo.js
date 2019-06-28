const Discord = require('discord.js');


function userinfo(message, client, prefix) {
		if (message.content.startsWith(prefix + 'userinfo')) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user)
			if (member) {
				let name = user.username
				let id = member.id
				let cAt = user.createdAt
				let jAt = member.joinedAt
				let avatar = user.avatarURL
				let embed = new Discord.RichEmbed();
				embed
					.setTitle('User Info')
					.setColor('RANDOM')
					.addField('Name :', name)
					.addField('ID :', id)
					.addField('Created at :', cAt)
					.addField('Joined at :', jAt)
					.setThumbnail(avatar)
					.setTimestamp()
					.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
				message.channel.send(embed)	
			};
		};
		if (!user) {
			const member = message.guild.member(message.author)
			let author = message.author
			let name = message.author.username
			let id = message.author.id
			let cAt = message.author.createdAt
			let jAt = member.joinedAt
			let avatar = message.author.avatarURL
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('User Info')
				.setColor('RANDOM')
				.addField('Name :', name)
				.addField('ID :', id)
				.addField('Created at :', cAt)
				.addField('Joined at :', jAt)
				.setThumbnail(avatar)
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
			message.channel.send(embed)	
		};		
	};
}

module.exports = userinfo;