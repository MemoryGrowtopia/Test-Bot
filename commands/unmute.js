const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Done");
  let muterole = message.guild.roles.find(`name`, "has been muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "has been muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
 


//end of module
}

module.exports.help = {
  name: "unmute"
}
