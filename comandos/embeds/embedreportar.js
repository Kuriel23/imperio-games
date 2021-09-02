const Discord = require('discord.js');

module.exports = {
  name: "embedreportar",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let embedreportar = new Discord.MessageEmbed()
    .setTitle("Reportando Animes ou Episódios com Error!")
    .setDescription("*Como Reportar Erros?* \n\n  <a:tubarao_brabo:829048618031513640> **Exemplo** <a:tubarao_brabo:829048618031513640> \n \n**-Tipo do erro:** Error loading player. \n \n**-Link do Episódio com erro:** "+client.games+"video/158289/hd \n \n**-PC ou Mobile?** PC. \n \n**Recomendo a usarem o navegador google chrome para assistir ele é o mais compatível com o nosso site**\n\n**Sites**\n"+client.games+"\n"+client.orion+"\n"+client.hd)
    .setThumbnail("https://media.tenor.com/images/b276eb1262c2ae17a7d94929051d7a9d/tenor.gif")
    .setFooter("AnimesOnline.Games", message.guild.iconURL()).setTimestamp()
    .setColor(client.cor)
  message.channel.messages.fetch({around: "849299251234209833", limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit("**LEIA POR FAVOR O EXEMPLO ABAIXO**", embedreportar);
    })}