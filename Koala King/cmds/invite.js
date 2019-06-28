const Discord = require('discord.js');


function invite(message, client, prefix){
	if (message.content === prefix + 'invite'){
		let embed = new Discord.RichEmbed();
		embed
			.setTitle('Invitation')
			.setColor('RANDOM')
			.addField('The link has been sent to you in your DM', 'Thanks for using Koala King!')
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed);	
		let embed2 = new Discord.RichEmbed();
		embed2
			.setTitle('Invitation')
			.setColor('RANDOM')
			.addField('Thanks for using Koala King!', 'Here\'s the link : https://discordapp.com/api/oauth2/authorize?client_id=591311533284392960&permissions=8&scope=bot')
			.setTimestamp() // 591311533284392960
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.author.createDM().then(channel => {
			channel.send(embed2);
		});	
	};
};

module.exports = invite;