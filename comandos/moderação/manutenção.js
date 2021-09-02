const Discord = require("discord.js");

module.exports = {
  name: "manutenção",
  description: "",
  aliases: ["manutencao"],
  oculto: true
}

module.exports.run = async (client, message, res) => {
  if (message.author.id !== "354233941550694400" && "609935159982161931") return 0;
  
  if (client.db2.fetch(`manutencao`).includes("ON")) {
    client.db2.set(`manutencao`, "OFF");
    return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Manutenção Desligada!", "https://image.flaticon.com/icons/png/128/889/889731.png").setColor(client.cor))
  }
  
  if (client.db2.fetch(`manutencao`).includes("OFF")) {
    client.db2.set(`manutencao`, "ON");
    return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Manutenção Ligada!", "https://image.flaticon.com/icons/png/512/889/889727.png").setColor(client.cor))
  }
  
};
