const Discord = require(`discord.js`);
const moment = require(`moment`);

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    
    message.channel.send({
        embed: {
            color: 0xd915e7,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL()
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id 

                },
                {
                    name: "Créé le :",
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: "Joue à",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Ne joue pas"}`
                },
                {
                    name: "A rejoin le :",
                    value: moment.utc(membre.joinAt).format("LL")
                }
            ],
            footer: {
                test: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })
};

module.exports.help = {
    name: "stats"
}