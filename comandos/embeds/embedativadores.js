const Discord = require('discord.js');

module.exports = {
  name: "embedativadores",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Ativadores", "https://image.flaticon.com/icons/png/512/826/826073.png")
    .setDescription(
      `Reaja a algum dos emojis a seguir para ativar uma experiência que mais lhe agradar!\n\n:heart: » Jogar Mudae\n:bell: » Notificar Anúncios da Império Games`
    )                  
    .setImage("https://i.imgur.com/zSXvMLt.png")
    .setColor(client.cor)
    .setFooter("Esperemos que goste da sua experiência customizada!")
    message.channel.send(embed)
    }