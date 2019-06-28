const Discord = require('discord.js'); 

function bugs(message, client, prefix) {
    
    let messageArray = message.content.split(' ');
    let args = messageArray.slice(1);

    if (message.content.startsWith(prefix + 'bugs')) {
        let bug = args.join(' ');
        if (!bug) {
            return message.channel.send(':no_entry: You didn\'t specified any bug.');
        }
        if (bug) {
            message.channel.send('The bug has been correctly sent to the developer');
            message.channel.send(`Bug reported : ${bug}`);
            message.channel.send('(PS : you should recieve a private message from the developer if the bug(s) is/are found so don\'t forget to activate DMs!)')
            console.log(`Someone named ${message.author.tag} reported the bug : ${bug}`);
        };
    };

}; 

module.exports = bugs;