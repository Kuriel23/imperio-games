const Discord = require('discord.js')

module.exports = {
  name: "embedlancamento",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let PrimeirasEmbed = new Discord.MessageEmbed()
    .setTitle("Clique no 🔔 para ser notificado de todos os lançamentos do nosso site!")
    .setDescription("🔔=Lançamentos")
    .setThumbnail("https://cdn.discordapp.com/attachments/752390178861088870/788174666891657306/oie_RWRPq03dYwrV.gif")
    .setColor(client.cor)
message.channel.send(PrimeirasEmbed)}