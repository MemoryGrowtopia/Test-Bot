const Discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async(bot, message, args) => {
if(!message.member.hasPermissions("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I Dont have permission thats sad")
	
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Supply a reason goddamn it");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) {
	try{
		muterole = await message.guild.createRole({
			name: "Muted"
			color: "#514f48"
			permissions: []
		});
		message.guild.channels.forEach(async (channel, id) => {
			await channel.overwriePermissions(muterole, {
				SEND_MESSAGES: false,
				ADD_REACTIONS: false,
				SEND_TTS_MESSAGES: false,
				ATTACH_FILES: false,
				SPEAK: false
			})
		})
	} catch(e) {
		console.log(e.stack);
	}
}


mutee.addRole(muterole.id).then({) => {
	message.delete()
	mutee.send(`Hello, you got muted in ${message.guild.name} for: ${reason`}
	message.channel.send(`${mutee.user.username} was successfuly muted.`)
})


let embed = new Discord.RichEmbed
    .setColor("#15f153")
    .setAuthor(`${message.guild.name}) Modlogs`, message.build.IconURL)
    .addField("Moderation", "Mute")
    .addField("Mutee:", mutee.user.username")
	.addField("Date:", message.createdAt)
	
	let sChannel = message.guild.channels.find(c => c.name === "Modlogs")
	sChannel.send(embed)
}


module.exports.help = {
  name: "tempmute"
}







	
	
	
	
	
	
	
	
	
	
	
	
	
}