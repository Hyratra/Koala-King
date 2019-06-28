const Discord = require('discord.js'); 

function suggest(message, client, prefix) {
    
    let messageArray = message.content.split(' ');
    let args = messageArray.slice(1);

    if (message.content.startsWith(prefix + 'suggest')) {
        let sug = args.join(' ');
        if (!sug) {
            return message.channel.send(':no_entry: You didn\'t specified any suggestion.');
        }
        if (sug) {
            message.channel.send('The suggestion has been correctly sent to the developer');
            message.channel.send(`Suggestion sent : ${sug}`);
            message.channel.send('(PS : you should recieve a private message from the developer if your suggestion(s) is/are added to the bot so don\'t forget to activate DMs!)')
            console.log(`Someone named ${message.author.tag} that suggested : ${sug}`);
        };
    };

}; 

module.exports = suggest;