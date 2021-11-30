const Discord = require('discord.js');
const bot = new Discord.Client;
const ms = require('ms');
 
const token = 'your_bot_token_here';
const PREFIX = 'your_bot_prefix_here';
 
bot.on('ready', () => {
    console.log('The bot has been successfully started!');
 
bot.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case 'poll':
 
            const pollEmbed = new Discord.RichEmbed()
                .setColor(0xFFC300)
                .setTitle("**Creating a Poll!**")
                .setDescription("?poll is to create a yes or no poll");
 
            if (!args[1]) {
                message.channel.send(pollEmbed);
                break;
 
            }
 
            let msgArgs = args.slice(1).join(" ");
 
            const pollMessage = new Discord.RichEmbed()
                .setColor(0xFFC300)
                .setTitle("New Poll Received!")
                .setDescription("Submitted by " + message.author.username)
                .setThumbnail(message.author.avatarURL)
                .addField("**Message:**", msgArgs)
                .setFooter(message.guild.name);
            
 
 
                message.channel.send(pollMessage).then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(100).catch(console.error);
                });
                break;
 
    }
 
})
