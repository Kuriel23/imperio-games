const Discord = require('discord.js')

module.exports = {
  name: "embedcores",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let PrimeirasEmbed = new Discord.MessageEmbed()
    .setTitle("CORES!")
    .setDescription("Clique nas reações abaixo de acordo com seu registro!\n\n🟣=Roxo\n💜=Rosa Choque\n🔴=Vermelho\n⚫=Preto\n🔵=Azul\n🟢=Verde\n🟡=Amarelo\n💙=Ciano\n⭕=Carmesim\n🟠=Laranja\n💚=Verde Fosco\n💠=Azul Fosco\n⚜️=Magenta\n⚪=Branco")
    .setThumbnail("https://dkrn4sk0rn31v.cloudfront.net/2018/11/05072157/rgbwheel.png")
    .setColor(client.cor)
message.channel.send(PrimeirasEmbed)}