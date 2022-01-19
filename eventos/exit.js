module.exports = {
  name: "exit",
  type: "guildMemberRemove"
}

module.exports.run = async (member, client) => {
  
  const Discord = require("discord.js");
  
  if (member.guild.id != "597137568605274112") return;
  if (member.user.bot) return;
  
    let MembroSaiuEmbed = new Discord.MessageEmbed()
  .setAuthor(`» ${member.user.tag} saiu do servidor! :(`, "https://image.flaticon.com/icons/png/128/1348/1348448.png")
  .setColor(client.cor)
  
  member.guild.channels.cache.get("600300473848823809").send(MembroSaiuEmbed);

};