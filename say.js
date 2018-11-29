const Discord = require('discord.js');
const client = Discord.Client():
const prefix = "$"

client.on('message', message => {
    if (message.content.startsWith(prefix + "say")){
    var args = message.content.split(" ").join(" ").slice(message.content.split(" ")[0].length);
    if (args.length<= 0 || !args) return message.reply("أكتب شي يابن الحلال"); undefined;
        message.channel.createWebhook(message.author.username,message.author.avatarURL).then(async webhook => {
            await webhook.send(args);
            await webhook.delete();
            return undefined;
        });
    };
});


client.login(process.env.BOT_TOKEN)
