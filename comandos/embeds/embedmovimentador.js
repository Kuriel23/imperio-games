const Discord = require('discord.js')

module.exports = {
  name: "embedmovimentador",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let SejaMovEmbed = new Discord.MessageEmbed()
    .setTitle("Recrutando para Movimentador!")
    .setDescription("<a:greenflame:714618368140902470>**Seja um movimentador para que serve um movimentador?**<a:greenflame:714618368140902470>\n\n<a:seta:737769966798897255>Dar vida pro chat\n<a:rainbowleft:840243723958222868>Falar mais no chat do que os membros comuns!\n\n<a:greenflame:714618368140902470>**REQUISITOS:**<a:greenflame:714618368140902470>\n\n<a:rainbowleft:840243723958222868>Ser gentil com todos.\n<a:rainbowleft:840243723958222868>Ter tempo pra ficar no chat.\n<a:rainbowleft:840243723958222868>Saber puxar assunto, sem que ofenda ninguém.\n\n<a:tiro:679860756585381923>Se estiver interessado venha fazer parte da Staff como movimentador, faça o formulário, clique [aqui]()\n<:pipoca:627814518533128211>Chefes: <@&722804645818400789>")
    .setImage("https://cdn.discordapp.com/attachments/731648781707378719/790337152453312562/movimentador.png")
    .setColor(client.cor)
message.channel.send(SejaMovEmbed)}