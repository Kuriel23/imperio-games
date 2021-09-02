const Discord = require('discord.js')

module.exports = {
  name: "embedeventos",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let embedeventos = new Discord.MessageEmbed()
    .setTitle("Clique no 🎉 para ser notificado de todos os Eventos do nosso Servidor!")
    .setDescription("🎉=<@&840990675495550977>")
    .setThumbnail("https://www.crescimentoverde.gov.pt/wp-content/uploads/2014/10/eventos.png")
    .setColor(client.cor)
     message.channel.messages.fetch({around: "840990556770271313", limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(embedeventos);
    });}