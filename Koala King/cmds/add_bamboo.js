const Discord = require('discord.js');
const fs = require('fs')
const countfile = "C:/Users/Evan/Desktop/Languages/JavaScript/Koala King/counter.json";
const counter = JSON.parse(fs.readFileSync(countfile, "utf8"));

function add_bamboo(message, client, prefix) {
	if (message.content === prefix + 'give-bamboo') {

		counter.count++;

		let countw = { "count": `${counter.count}` };
		let data = JSON.stringify(countw);
		fs.writeFileSync('counter.json', data);

		let embed = new Discord.RichEmbed();
		let avatar = message.author.avatarURL
		embed
			.setTitle('Bamboo gived!')
			.setThumbnail(avatar)
			.setColor('RANDOM')
			.setDescription(`<@${message.author.id}> just gave a bamboo to the Koala King! New bamboo counter : ${counter.count} bamboos!`)
			.setTimestamp()
			.setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');

		message.channel.send(embed);
	};
};

module.exports = add_bamboo;