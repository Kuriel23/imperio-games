const Discord = require("discord.js");

module.exports = {
  name: "pescar",
  description: "",
  aliases: ["peixe", "fish", "fishing"]
};

module.exports.run = async (client, message, res) => {
  try {
    if (message.member.voice.channel) {
      client.together
        .generateTogetherCode(message.member.voice.channelID, "fishing")
        .then(async invite => {
          let embed = new Discord.MessageEmbed()
            .setAuthor(
              "PESCAR",
              "https://image.flaticon.com/icons/png/512/858/858398.png"
            )
            .setColor(client.cor)
            .setDescription("[Clique aqui para começar](" + invite.code + ")");
          message.inlineReply({ embed });
        });
    }
  } catch (err) {
    message.inlineReply(
      new Discord.MessageEmbed()
        .setAuthor("» Você deveria entrar num canal de voz", client.warn)
        .setColor(client.cor)
    );
  }
};
