const Discord = require("discord.js");

module.exports = {
  name: "youtube",
  description: "Veja Youtube com seus amigos!",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  if (message.member.voice.channel) {
    client.together
      .generateTogetherCode(message.member.voice.channelID, "youtube")
      .then(async invite => {
        let embed = new Discord.MessageEmbed()
          .setAuthor(
            "YOUTUBE",
            "https://image.flaticon.com/icons/png/512/1384/1384060.png"
          )
          .setColor(client.cor)
          .setDescription("[Clique aqui para começar](" + invite.code + ")");
        message.inlineReply(embed);
      });
  } else {
    message.inlineReply(
      new Discord.MessageEmbed()
        .setAuthor("» Você deveria entrar num canal de voz", client.warn)
        .setColor(client.cor)
    );
  }
};
