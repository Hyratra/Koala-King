const Discord = require('discord.js');

function help(message, client, prefix) {

	let messageArray = message.content.split(' ');
	let args = messageArray.slice(1);

	if (message.content.startsWith(prefix + 'help')) {
		const cmd = args.join(' ');
		if (!cmd) {
			let embed = new Discord.RichEmbed();
			embed
				.setTitle('Help menu')
				.setColor('RANDOM')
				.addField('­', 'For more information about a command, say ' + prefix + 'help <command>.')
				.addField('Util :', '­```say \nembed \nuserinfo \nserverinfo \nbotinfo \nbamboos \ngive-bamboo \ninvite \nabout \nping \nhelp```')
				.addBlankField(true)
				.addField('Fun :', '```cat \ndog \n8ball \nroulette \ndice \nactivity```')
				.addBlankField(true)
				.addField('Searches :', '```google \nyoutube \ntwitch \nimgur \ngiphy \ntenor```')
				.addBlankField(true)
				.addField('Other :', '```welcome (not a command, do !help welcome to show info about it) \nsuggest \nbugs```')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed);
		};
		if (cmd === 'say') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Say command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'say <text>. The say command is used for saying things with the bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'embed') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Embed command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'embed <text>. The embed command is used for saying things in embed with the bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'cat') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Cat command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'cat. The cat command is used for getting random cat pictures.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'dog') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Dog command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'dog. The dog command is used for getting random dog pictures.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'userinfo') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('User info command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'userinfo [user]. The userinfo command is used for getting the info of your profile or one of the user\'s profile.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'serverinfo') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Server info command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'serverinfo. The serverinfo command is used for getting the info of the current server.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'botinfo') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Bot info command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'botinfo. The botinfo command is used for getting the info of this bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'gif') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Gif command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'gif. The gif command is used for getting random gifs.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === '8ball') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('8ball command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + '8ball <question>. The 8ball command responds to a question.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'roulette') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Roulette command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'roulette. The roulette command saves or kills you randomly.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'dice') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Dice command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'dice. The dice command chooses randomly a number between 1 and 6.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'google') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Google command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'google <search>. The google command searches from Google something.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'youtube') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Youtube command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'youtube <search>. The youtube command searches from Youtube something.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'twitch') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Twitch command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'twitch <search>. The twitch command searches from Twitch something.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'imgur') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Imgur command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'imgur <search>. The imgur command searches from Imgur something.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'giphy') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Giphy command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'giphy <search>. The giphy command searches from Giphy something.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'tenor') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Tenor command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'tenor <search>. The tenor command searches from Tenor something.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'bamboos') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Bamboos command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'bamboos. The bamboos command shows the number of bamboos the users gived to the King Koala per server.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'give-bamboo') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Give bamboo command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'give-bamboo. The give-bamboo command gives one bamboo to the King Koala globally (ALL SERVERS GET THE GLOBAL COUNTER).')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'about') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('About command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'about. The about command shows the credits of this bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'invite') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Invite command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'invite. The invite command shows the link in DM to invite this bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'activity') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Activity command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'activity <activity>. The activity command changes the activity of this bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'ping') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Ping command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'ping. The ping command shows your ping and the bot\'s ping.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'help') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Help command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'help [command]. The help command shows you the help menu and the help for each command.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'welcome') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Welcome command')
				.setColor('RANDOM')
				.setDescription('Usage : none. The welcome command welcomes the new members (NEEDS A CHANNEL STARTING WITH WELCOME (BIENVENUE FOR FRENCH SERVERS)).')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'suggest') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Suggest command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'suggest <suggestion>. The suggest command is used to suggest something for the bot.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'bugs') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Bugs command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'bugs <bugs>. The bugs command is used to report bugs from the bot to the developer.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
		if (cmd === 'servers') {
			let embed = new Discord.RichEmbed()
			embed
				.setTitle('Servers command')
				.setColor('RANDOM')
				.setDescription('Usage : ' + prefix + 'servers. The servers command is used to show in how many servers the bot is in.')
				.addField('­', '<> : Obligated ; [] : Optionnal')
				.setTimestamp()
				.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300')
			message.channel.send(embed)
		}
	};
};

module.exports = help;