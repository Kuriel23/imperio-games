const Discord = require('discord.js')

module.exports = {
  name: "botinfo",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {

    let clientping = new Date() - message.createdAt;
  
    let botinfoEmbed = new Discord.MessageEmbed()
        .setTitle("» Botinfo", "https://www.pngkey.com/png/full/752-7520513_receipt-bot.png")
        .addField("👥 Usuários:", client.guilds.cache.reduce((a, g) => a + g.memberCount, 0), true)
        .addField("🏓 Ping:", Math.floor(clientping) + "ms", true)
        .addField("📖 Linguagem:", "Javascript", true)
        .addField("<:tocomteso:824136824112545874> Gênero do BOT:", "Traveco de acordo com o meu dono!", true)
        .addField("<:database:872485559375896596> Database:", "Mongoose", true)
        .addField("<:cdigo:872486079377338439> Desenvolvido em:", "25 de Junho de 2020 às 18:16", true)
        .setThumbnail("https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .setColor(client.cor); 
    
    message.inlineReply(botinfoEmbed)
}
