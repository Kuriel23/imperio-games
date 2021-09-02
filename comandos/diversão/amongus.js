const Discord = require("discord.js");

module.exports = {
  name: "amongus",
  description: "",
  aliases: ["betrayal"]
};

module.exports.run = async (client, message, res) => {
  if (message.member.voice.channel) {
    client.together
      .generateTogetherCode(message.member.voice.channelID, "betrayal")
      .then(async invite => {
        let embed = new Discord.MessageEmbed()
          .setAuthor(
            "Among Us",
            "https://image.flaticon.com/icons/png/128/141/141074.png"
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
