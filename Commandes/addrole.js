const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Tu n'as pas la permission !`);
    }

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Je n'ai pas le permission !`);
    }

    let membre = message.mentions.members.first();

    let roles = message.mentions.roles.first();

    if(!roles) {
        return message.channel.send ("Vous n'avez pas mentionné de rôle !");
    }

    if(!membre) {
        return message.channel.send ("Vous n'avez pas mentionné de membre !");
    }

    membre.addRole(roles).catch(console.error);

    message.channel.send(`${membre} a maintenant le rôle ${roles}`);

};

module.exports.help = {
    name: "addrole"
};