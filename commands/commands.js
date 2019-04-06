const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Commands are:")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Warn", "u!warn @name")
    .addField("Ban", "u!ban @name")
    .addField("Kick", "u!kick @name")
    .addField("addrole/removerole", "u!addrole @name/removerole");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"commands"
}

