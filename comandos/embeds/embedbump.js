const Discord = require('discord.js')

module.exports = {
  name: "embedbump",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let bump = new Discord.MessageEmbed()
    .setDescription("**Ajude o Servidor dando o comando !d bump no chat <#843540881121738792> para novos membros entrar no servidor!**\n\n🆙=<@&843539549669949461>")
    .setThumbnail("https://cdn.discordapp.com/attachments/752390178861088870/843545302563815434/bump.gif")
    .setColor(client.cor)
     message.channel.messages.fetch({around: "843552070271238175", limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit("@everyone", bump);
    });}