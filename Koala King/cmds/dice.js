const Discord = require('discord.js');

const nmb = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6'
];

function randomObject(array) {
	return array[Math.floor(Math.random() * array.length)];
};

function dice(message, client, prefix) {
	if (message.content === prefix + 'dice') {
		let dice = randomObject(nmb)
		let embed = new Discord.RichEmbed();
		embed
			.setTitle('Dice')
			.setColor('RANDOM')
			.addField('Number found :', `The number ${dice}`)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
		message.channel.send(embed);
	};
};

module.exports = dice;