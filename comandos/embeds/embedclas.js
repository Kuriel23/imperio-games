const Discord = require('discord.js')

module.exports = {
  name: "embedclas",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let Embedclã = new Discord.MessageEmbed()
    .setTitle("Clãs de Animes! \n\n**Clique nas reações abaixo de acordo com sua preferência de clã**")
    .setDescription("\n\n🔴**=**<@&841456762389659678>\n🟡**=**<@&841459363364995142>\n🟠**=**<@&841463108022173706>\n⚫**=**<@&841464556697288784>\n⭕**=**<@&841457465136382002>\n🟣**=**<@&841466359364059148>\n⚜️**=**<@&841458095611969546>\n🟢**=**<@&841467143769554995>\n🟥**=**<@&841467969632731158>\n\n **Esse clã é apenas para Admins=<@&841461773005357099>**")
    .setThumbnail("https://cdn.discordapp.com/attachments/752390178861088870/841481890170535966/naruto.png")
    .setColor(client.cor)
message.channel.send(Embedclã)}