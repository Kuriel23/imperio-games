const Discord = require('discord.js');

module.exports = {
  name: "embedregras",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Regras", "https://image.flaticon.com/icons/png/512/925/925047.png")
    .setDescription(
      `A Império Games & Animes é uma fonte de notícias onde informamos gamers e otakus sobre as notícias mais recentes desse mundo!\n\n<:um:882972801236078603> » Não faça spam/flood, isso prejudica você e outras pessoas.\n<:dois:882972801722634310> » Não faça raid ou travas.\n<:tres:882972801122840577> » Não diga palavras inapropriadas, existe menores de idade.\n<:quatro:882972801600983060> » Não poste conteúdo impróprio(Conteúdo +18/NSFW, Links externos que conduzam a vírus, Racismo, etc).\n<:cinco:882972801458405446> » Cada canal tem sua utilização, utilize-os corretamente.`
    )                  
    .setImage("https://cdn.discordapp.com/attachments/670760689912119336/883102114941894686/Novo_Projeto.png")
    .setColor(client.cor)
    .setFooter("Caso você não cumpra estas regras você poderá levar punição!")
  let embed2 = new Discord.MessageEmbed() 
    .setAuthor("» Redes Sociais", "https://image.flaticon.com/icons/png/512/2327/2327640.png")               
    .setImage("https://cdn.discordapp.com/attachments/670760689912119336/725128694720626768/Redes.jpg")
    .setColor(client.cor)
    message.channel.send(embed)
    message.channel.send(embed2)
    }