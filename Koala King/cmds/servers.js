const Discord = require('discord.js'); 

function servers(message, client, prefix) {
    if (message.content === prefix + 'servers') {
        let embed = new Discord.RichEmbed();
        embed
            .setTitle('Servers')
            .setColor('RANDOM')
            .addField('The number of servers the bot is currently in is :', `__**${client.guilds.size}** servers!__`)
            .setTimestamp()
            .setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
        message.channel.send(embed); 
    };
}; 

module.exports = servers;