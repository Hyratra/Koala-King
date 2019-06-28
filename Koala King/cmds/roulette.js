const Discord = require('discord.js');

const anss = [
    'won!',
    'failed.'
]

function randomObject(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function roulette(message, client, prefix) {
    if (message.content === prefix + 'roulette') {
        let answer = randomObject(anss);
        let embed = new Discord.RichEmbed();
        embed
            .setTitle('Roulette')
            .setColor('RANDOM')
            .addField('You played the roulette :', `__**You ${answer}**__`)
            .setTimestamp()
            .setFooter('Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');
        message.channel.send(embed);
    }
}

module.exports = roulette;