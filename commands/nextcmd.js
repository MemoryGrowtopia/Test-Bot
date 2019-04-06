const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Page 2 Commands")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("botinfo", "u!botinfo")
    .addField("tempmute", "u!tempmute @name ms/h/d")
    .addField("serverinfo", "u!serverinfo")
    .addField("warnlevel", "u!warnlevel @name(idk if it works)");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"page2command"
}

