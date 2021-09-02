const Discord = require("discord.js");

module.exports = {
  name: "poker",
  description: "",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  if (message.member.voice.channel) {
    client.together
      .generateTogetherCode(message.member.voice.channelID, "poker")
      .then(async invite => {
        let embed = new Discord.MessageEmbed()
          .setAuthor(
            "POKER",
            "https://image.flaticon.com/icons/png/128/864/864815.png"
          )
          .setColor(client.cor)
          .setDescription("[Clique aqui para começar](" + invite.code + ")");
        message.inlineReply({ embed });
      });
  } else {
    message.inlineReply(
      new Discord.MessageEmbed()
        .setAuthor("» Você deveria entrar num canal de voz", client.warn)
        .setColor(client.cor)
    );
  }
};
