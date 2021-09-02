const Discord = require("discord.js");

module.exports = {
  name: "report",
  description: "",
  aliases: ["reportar"]
}

module.exports.run = async (client, message, res) => {
    let member = message.guild.member(message.mentions.users.first() || client.users.cache.get(res[0]));
    if(!member) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Você têm que mencionar o usuário!", client.warn).setColor(client.cor))
    if(!res.slice(1).join(" ")) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Você tem que adicionar Motivo!", client.warn).setColor(client.cor))
    message.author.send(`Obrigado por enviar o seu report! Nossos administradores agora analisarão o seu reporte e tentar manter a comunidade segura!`)
    const ReportMessage = res.slice(1).join(" ");
    message.delete();
    const { attachments } = message
    const messageHadAttachment = attachments.first()
      const ReportEmbed = new Discord.MessageEmbed()
          .setAuthor(`Reporte de ${message.author.tag} (ID: ${message.author.id})`, "https://image.flaticon.com/icons/png/512/504/504018.png")
          .setDescription(`Reportado: ${member} ID: ${member.user.id}\n${ReportMessage}`)
          .setColor(client.cor)
      if(messageHadAttachment) ReportEmbed.setImage(messageHadAttachment.proxyURL)
      client.channels.cache.get('743927596428951655').send("@here", ReportEmbed)
};
