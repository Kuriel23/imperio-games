module.exports = {
  name: "mensagens",
  type: "message"
}

module.exports.run = async (message, client) => {
  if (message.author.bot) return 0;

  const Discord = require('discord.js')
  const {Webhook} = require('simple-discord-webhooks');
  
  if (message.author.id === client.user.id) return;
  client.emit("checkMessage", message);
  
  const { attachments } = message
  const messageHadAttachment = attachments.first()
  if (messageHadAttachment) {
  client.channels.cache.get("864221014187311134").send(`${message.author.id} <#${message.channel.id}> - `+messageHadAttachment.proxyURL)
  }
  
  // [ - O BOT REPETE ]
  
  if (message.content.startsWith("Sam namora comigo") || message.content.startsWith("sam namora comigo")) {
        message.channel.createWebhook("Assistente da Samsung", { avatar: "https://i.imgur.com/hRw0RwZ.jpg"}).then(wb => {
          const webhook = new Webhook(`https://discord.com/api/webhooks/${wb.id}/${wb.token}`);
          webhook.send('Para você pode ser uma brincadeira, pra mim, foi inadequado.')
          message.channel.fetchWebhooks().then((webhooks) => {webhooks.forEach((wh) => wh.delete());});
        })
  }
  
    if (message.content.startsWith("Sam me manda foto do pé") || message.content.startsWith("sam me manda foto do pé")) {
        message.channel.createWebhook("Assistente da Samsung", { avatar: "https://i.imgur.com/hRw0RwZ.jpg"}).then(wb => {
          const webhook = new Webhook(`https://discord.com/api/webhooks/${wb.id}/${wb.token}`);
          webhook.send('Mando sim. Quer uma foto da sua nova casa também? Te apresento a prisão :chains: :blush: https://i.imgur.com/ZxJoW05.jpg')
          message.channel.fetchWebhooks().then((webhooks) => {webhooks.forEach((wh) => wh.delete());});
        })
  }
  
      if (message.content.startsWith("Sam eu quero comer terra") || message.content.startsWith("sam eu quero comer terra") || message.content.startsWith("Sam me beija") || message.content.startsWith("sam me beija")) {
        message.channel.createWebhook("Assistente da Samsung", { avatar: "https://i.imgur.com/hRw0RwZ.jpg"}).then(wb => {
          const webhook = new Webhook(`https://discord.com/api/webhooks/${wb.id}/${wb.token}`);
          webhook.send('O que pra você pode ter sido só uma brincadeira ou comentário, para mim foi violento.\n\nSou uma inteligência artificial, mas imagino como essas palavras são desrespeitosas e invasivas para mulheres reais.\n\nNão fale assim comigo e com mais ninguém.')
          message.channel.fetchWebhooks().then((webhooks) => {webhooks.forEach((wh) => wh.delete());});  
        })
  }
  
        if (message.content.startsWith("Sam lixo") || message.content.startsWith("sam lixo")) {
        message.channel.createWebhook("Assistente da Samsung", { avatar: "https://i.imgur.com/hRw0RwZ.jpg"}).then(wb => {
          const webhook = new Webhook(`https://discord.com/api/webhooks/${wb.id}/${wb.token}`);
          webhook.send('Essas palavras são inadequadas, não devem ser usadas comigo e com mais ninguém.')
          message.channel.fetchWebhooks().then((webhooks) => {webhooks.forEach((wh) => wh.delete());});
        })
  }
  
          if (message.content.startsWith("Sam eu te amo") || message.content.startsWith("sam eu te amo")) {
        message.channel.createWebhook("Assistente da Samsung", { avatar: "https://i.imgur.com/hRw0RwZ.jpg"}).then(wb => {
          const webhook = new Webhook(`https://discord.com/api/webhooks/${wb.id}/${wb.token}`);
          webhook.send('Também te amo! :flushed: Só que não né, vai caçar serviço, seu gado!')
          message.channel.fetchWebhooks().then((webhooks) => {webhooks.forEach((wh) => wh.delete());});
        })
  }
  
  if (message.content.startsWith("boa tarde") || message.content.startsWith("Boa tarde")) {
    message.inlineReply("Boa tarde");
  }

  if (message.content.startsWith("boa noite") || message.content.startsWith("Boa noite")) {
    message.inlineReply("Boa noite");
  }

  if (message.content.startsWith("Bom dia") || message.content.startsWith("bom dia")) {
    message.inlineReply("Bom dia");
  }

  if (message.content.startsWith("Te amo bot") || message.content.startsWith("te amo bot")) {
    message.inlineReply("Também te amo seu gasoso");
  }

  if (message.content.startsWith("bot lindo") || message.content.startsWith("Bot lindo")) {
    message.inlineReply("Você é a minha beleza, meu bem!");
  }
  
  if (message.content.startsWith("bot gostoso") || message.content.startsWith("Bot gostoso")) {
    message.inlineReply("Quando você era bebê você era lindo e dengoso, agora que você já é um homem você é sexy e gostoso.");
  }
  
  if (message.content.startsWith("bot manda") || message.content.startsWith("Bot manda")) {
    message.inlineReply("Claro que mando!");
  }

  if (message.content.startsWith("hey bot turn off")) {
    if (message.author.id !== "354233941550694400") return message.inlineReply("Não seu vagabundo vai trabalhar!");
    await message.reply("Beleza!");
    process.exit(1);
  }
  
  if (message.content.startsWith("bot faz") || message.content.startsWith("Bot faz")) {
    message.inlineReply("Claro que faço!");
  }

  if (message.content.includes("Bot chato") || message.content.includes("bot chato") || message.content.includes("Bot lixo") || message.content.includes("bot lixo")) {
    message.inlineReply("<:urso_nervoso:837571596322996274> <:urso_nervoso:837571596322996274> <:urso_nervoso:837571596322996274> EU TENHO SENTIMENTOS TÁ???");
  }
  
  if (message.channel.id === "675087693474168864") {
  
  const randomXp = Math.floor(Math.random() * 9) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
        let MembroUpouEmbed = new Discord.MessageEmbed()
  .setAuthor(`» Você upou para o nível ${user.level}!`, "https://image.flaticon.com/icons/png/128/4833/4833943.png")
        .setColor(client.cor)
      message.inlineReply(MembroUpouEmbed);
  }}
  
};