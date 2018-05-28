const Discord = require('discord.js');
const moment = require("moment");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setUsername('Mante')
    client.user.setPresence({ game: { name: 'mante', type: 0 } });
    console.log(`Mante is ready to explore a new world!`);
});

var prefix = '+';
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;
    if(message.content === `${prefix}Hello?`){
         message.channel.send("Hi!");
      }
        if(message.content === `${prefix}Goodbye!`){
         message.channel.send("Bye, Bye!");
      }
      if(message.content === `${prefix}info`){
            var user = message.mentions.users.first() || message.author;
            var embed = new Discord.RichEmbed()
                .setThumbnail(user.avatarURL)
                .setColor("#42f4b0")
                .addField('ID', user.id, true)
                .addField('Username', user.username, true)
                .addField('Discriminator', user.discriminator, true)
                .addField('Status', user.presence.status, true)
                .addField('Bot?', user.bot, true)
                .addField('Joined At', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
            message.channel.send({ embed });
      }
});
client.login("NDUwNjMzMDc5NTkwMDkyODEw.De2U3A.vNfQYKF9JYMtcFtYhxUhDlHCWTo");
