module.exports = {
  name: "mensagens",
  type: "message"
}

module.exports.run = async (message, client) => {

  if (message.channel.type === "news") {
    message.crosspost()
  }

  if (message.author.bot) return 0;

  const Discord = require('discord.js')
  
  if (message.author.id === client.user.id) return;
  client.emit("checkMessage", message);
  
  if (message.channel.id === "630152042194665493") {
  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/QPEaDEo.png",
    "parceria.png"
  );
	  return message.channel.send("<@&926845797553807401>",attachment)}

  // [ - O BOT REPETE ]
  
  if (message.content.startsWith("boa tarde") || message.content.startsWith("Boa tarde")) {
    message.inlineReply("Boa tarde");
  }

  if (message.content.startsWith("boa noite") || message.content.startsWith("Boa noite")) {
    message.inlineReply("Boa noite");
  }

  if (message.content.startsWith("Bom dia") || message.content.startsWith("bom dia")) {
    message.inlineReply("Bom dia");
  }
  
};