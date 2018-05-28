const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setUsername('Mante')
    client.user.setPresence({ game: { name: 'mante', type: 0 } });
    console.log(`Mante is ready to explore a new world!`);
});

var prefix = '+';
client.on('message', message => {
     if (!message.content.startsWith(prefix)) return;
    if(message.content === "Hello?") {

         message.channel.send("Hi!");
      }
});
client.login("NDUwNjMzMDc5NTkwMDkyODEw.De2U3A.vNfQYKF9JYMtcFtYhxUhDlHCWTo");