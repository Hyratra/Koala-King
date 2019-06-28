const Discord = require('discord.js')

const answers = [
	'Yes',
	'No',
	'Definitely',
	'I\'m not sure',
	'Yah',
	'Nuu',
	'I don\'t really know',
	'I don\'t know',
	'Uhmmm..',
	'Yessssssssss',
	'Nooooooooooo',
	'Really?',
	'I\'m sleeping...',
	'Oh, uhm.. yah!... no. I DON\'T KNOW',
	'Off',
	'On',
	'OOF'
];

function randomObject(array) {
	return array[Math.floor(Math.random() * array.length)];
};

function eightball(message, client, prefix) {
	if(message.content.startsWith(prefix + '8ball')) {
		let ans = randomObject(answers);
		let embed = new Discord.RichEmbed();
		embed
			.setTitle('Koala King says')
			.setColor('RANDOM')
			.setDescription(ans)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed)
	};
};

module.exports = eightball;