const Discord = require('discord.js'); 
const superagent = require('superagent');

async function dog(message, client, prefix) {
    if (message.content === prefix + 'dog') {
        let msg = await message.channel.send('Connecting to the module server...')
        let {body} = await superagent
        .get('https://dog.ceo/api/breeds/image/random').catch(channel => {
            channel.send('The module server broke, please try again.');
        });

        if (!{body}) return message.channel.send('The module server broke, please try again.');

        let embed = new Discord.RichEmbed();
        embed
            .setColor('RANDOM')
            .setAuthor('Waf 🐶', client.user.avatarURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
        message.channel.send(embed) 
        msg.delete()
    }
}; 

module.exports = dog;