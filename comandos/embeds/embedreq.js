const Discord = require('discord.js');

module.exports = {
  name: "embedreq",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Requisitos", "https://cdn-icons-png.flaticon.com/128/3790/3790107.png")
    .setDescription(
      `Mínimo de 10 membros\nServidor Organizado\nCargo de Parceiro\nMencionar um Ping na Mensagem\nCanal para divulgar parcerias\nRepresentante\nRespeitar os Termos do Discord\n\n**Caso queira ser parceiro, fale em <#928003434236502116>.**`
    )                  
    .setImage("https://i.imgur.com/Mq4NR2o.png")
    .setColor(client.cor)
    .setFooter("Caso o seu convite expire ou representante saia, excluiremos a parceria e o representante perderá o cargo!")
    message.channel.send(embed)
    }