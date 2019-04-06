const Discord = require("discord.js");
const PREFIX = "u!"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.delete();
    message.reply("United States Cavalry has" + message.guild.memberCount + " members.");
}

module.exports.conf = {
    aliases: ['membernumber']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "membercount"

}

// let memberAndBot = message.guild.memberCount;
// let membercount = memberAndBot.filter(member.user.bot);