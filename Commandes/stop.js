const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const Bot = new Discord.Client()

module.exports.run = async(bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send ("Connectez vous à un salon vocal...")
    if (!message.guild.me.voice.channel) return message.channel.send ("Je ne suis pas connecté...")
    if(message.guild.me.voice.channelID !== message.member.voice.channelID) return message.channel.send("Je ne suis pas dans ta salon");
    message.guild.me.voice.channel.leave();
    message.channel.send ("J'arrête la musique.")
};

console.error(error);
    message.reply("Une erreur s'est produite lors de l'exécution de cette commande!");
    
module.exports.help = {
    name: "stop"
};