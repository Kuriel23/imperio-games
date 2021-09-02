const Discord = require("discord.js");

module.exports = {
  name: "ajuda",
  description: "",
  aliases: ["help"]
}

module.exports.run = (client, message, res) => {
  message.inlineReply("Veja os meus comandos em: https://www.animesgamesbot.ml/commands.html")
};
