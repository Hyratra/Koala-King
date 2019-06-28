const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const token = config.token;
const prefix = config.prefix;

client.on('ready', function(){
	console.log(`The client is logged in as ${client.user.username}`);
	client.user.setActivity('with bamboo');
});

client.on('guildMemberAdd', (message, member) => {
	const channel = member.guild.channels.find(ch => ch.name.in('welcome') || ch.name.startsWith('bienvenue'));
	const guild = member.guild;
	const name = member.user.id;
	const icon = member.user.avatarURL;

	if (!channel) return message.channel.send('Someone joined the server, but you didn\'t created a welcome channel!');

	let embed = new Discord.RichEmbed();
	embed
		.setTitle('Welcome!')
		.setColor('RANDOM')
		.setThumbnail(icon)
		.setDescription(`Welcome to the __**${guild}**__ server __**<@${name}>**__! Have fun in this server!`)
		.setImage('https://media.giphy.com/media/n2zM47kbTZP6o/giphy.gif')
		.setFooter('GIF source : GIPHY / Koala King created by @A french koala#6855', 'https://media.discordapp.net/attachments/424868713053945856/591323090894585857/profile_icon.png?width=300&height=300');

	channel.send(embed);
})


client.on('message', message => {

	const invite = require('./cmds/invite.js');
	invite(message, client, prefix);

	const ping = require('./cmds/ping.js');
	ping(message, client, prefix);

	const userinfo = require('./cmds/userinfo.js');
	userinfo(message, client, prefix);

	const activity = require('./cmds/activity.js');
	activity(message, client, prefix);

	const say = require('./cmds/say.js');
	say(message, client, prefix);

	const sayembed = require('./cmds/sayembed.js');
	sayembed(message, client, prefix);

	const help = require('./cmds/help.js');
	help(message, client, prefix);

	const serverinfo = require('./cmds/serverinfo.js');
	serverinfo(message, client, prefix);

	const botinfo = require('./cmds/botinfo.js');
	botinfo(message, client, prefix); 

	const bamboos = require('./cmds/bamboos.js');
	bamboos(message, client, prefix);

	const add_bamboo = require('./cmds/add_bamboo.js');
	add_bamboo(message, client, prefix);

	const about = require('./cmds/about.js');
	about(message, client, prefix);

	const google = require('./cmds/google.js');
	google(message, client, prefix);

	const youtube = require('./cmds/youtube.js');
	youtube(message, client, prefix);

	const imgur = require('./cmds/imgur.js');
	imgur(message, client, prefix);

	const giphy = require('./cmds/giphy.js');
	giphy(message, client, prefix);

	const tenor = require('./cmds/tenor.js');
	tenor(message, client, prefix);

	const servers = require('./cmds/servers.js'); 
	servers(message, client, prefix);

	const bugs = require('./cmds/bugs.js'); 
	bugs(message, client, prefix);
	
	const suggest = require('./cmds/suggest.js'); 
	suggest(message, client, prefix);
	
	const cat = require('./cmds/cat.js'); 
	cat(message, client, prefix);
	
	const dog = require('./cmds/dog.js'); 
	dog(message, client, prefix);

	const dice = require('./cmds/dice.js'); 
	dice(message, client, prefix);

	const eightball = require('./cmds/8ball.js');
	eightball(message, client, prefix);
    
    const roulette = require('./cmds/roulette.js');
	roulette(message, client, prefix);

});

client.login(token);