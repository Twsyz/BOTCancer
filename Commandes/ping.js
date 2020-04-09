const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send("ping").then(async(m) => await m.edit(`Pong : ${Date.now() - début} cms`));

};

module.exports.help =  {
    name:"ping"
};