const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
  if(args[0] == "help"){
    message.reply("Usage: !mute <user> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Please supply a reason.");

  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }


mutee.addRole(muterole.id).then(), ()=> {
	message.delete()
	mutee.send(`Hello, you got muted in ${message.guild.name}`)
	message.channel.send(`${mutee.user.username} was successfuly muted.`)
});

let muteembed = new Discord.RichEmbed()
.setDescription(`Mute executed by ${message.author}`)
.setColor(orange)
.addField("Muted User", tomute)
.addField("Muted in", message.channel)
.addField("Time", message.createdAt)
.addField("Length", mutetime)
.addField("Reason", reason);

let incidentschannel = message.guild.channels.find(`name`, "incidents");
if(!incidentschannel) return message.reply("Please create a incidents channel first!");
incidentschannel.send(muteembed);


module.exports.help = {
  name: "mute"
}







	
	
	
	
	
	
	
	
	
	
	
	
	
}
