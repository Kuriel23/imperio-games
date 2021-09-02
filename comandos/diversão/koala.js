const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
  name: "koala",
  description: "",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  let button = new MessageButton()
    .setLabel("Sniff")
    .setStyle("blurple")
    .setEmoji("🐨")
    .setID("koalin");
  message.channel.send("Com certeza ver um koala?", button);
  client.on("clickButton", async button => {
    if (button.id === "koalin") {
      const { body } = await superagent.get(
        "https://some-random-api.ml/img/koala"
      );
      let KoalaEmbed = new Discord.MessageEmbed()
        .setAuthor(
          "» Koalitas são tãooooooo fofinhos!",
          "https://image.flaticon.com/icons/png/128/2424/2424348.png"
        )
        .setImage(body.link)
        .setColor(client.cor);
      button.reply.send(KoalaEmbed, true);
    }
  });
};
