const Discord = require("discord.js");

module.exports = {
  name: "biografia",
  description: "",
  aliases: ["bio"]
}

module.exports.run = async (client, message, res) => {
  const bio = res.join(" ");
  const comousar = new Discord.MessageEmbed()
    .setAuthor("» Biografia", "https://image.flaticon.com/icons/png/512/3079/3079112.png")
    .setDescription(`Irá fazer sua biografia ser mostrada em a?perfil`)
    .addField(
      "Como usar",
      `\`a?biografia <texto na biografia>\`\n\`biografia Sou gamer de Q U A L I D A D E no Csgo!\``
    )
    .setColor(client.cor)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());

  if (!bio) return message.inlineReply(comousar);

  client.db.Users.findOne({ _id: message.author.id }, function(err, doc) {
    if (!doc) {
new client.db.Users({
        _id: message.author.id
      }).save();
      return message.inlineReply(
        new Discord.MessageEmbed().setAuthor("» Tente Novamente.", client.warn).setColor(client.cor)
      );
    } else {
      doc.biografia = bio;
      doc.save();
      message.inlineReply(new Discord.MessageEmbed().setAuthor("» Defini a sua Biografia com sucesso!", client.ok).setColor(client.cor));
    }
  });
};
