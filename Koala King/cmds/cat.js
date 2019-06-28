const Discord = require('discord.js'); 
const superagent = require('superagent');

async function cat(message, client, prefix) {
    if (message.content === prefix + 'cat') {
        let msg = await message.channel.send('Connecting to the module server...')
        let {body} = await superagent
        .get('http://aws.random.cat/meow').catch(channel => {
            channel.send('The module server broke, please try again.');
        });

        if (!{body}) return message.channel.send('The module server broke, please try again.');

        let embed = new Discord.RichEmbed();
        embed
            .setColor('RANDOM')
            .setAuthor('Meow 🐱', client.user.avatarURL)
            .setImage(body.file)
            .setTimestamp()
            .setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
        message.channel.send(embed) 
        msg.delete()
    }
}; 

module.exports = cat;