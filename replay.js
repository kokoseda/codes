const Discord = require('discord.js')
const client = new Discors.Client();

client.on('message', (message) => {
if(message.content == 'هلا')
// message.replay('هلا بك');
message.channel.sendMessage('هلا بك')

}

});



client.login(process.env.BOT_TOKEN);
