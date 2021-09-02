const Discord = require("discord.js");
const Canvas = require("canvas");
const moment = require("moment");
moment.locale("pt-br");

module.exports = {
  name: "perfil",
  description: "Vamos ver se é rápido mesmo.",
  aliases: ["profile","userinfo"]
}

module.exports.run = async (client, message, res) => {
    const applyText = (canvas, text) => {
      const context = canvas.getContext("2d");

      return context.font;
    };
    message.channel.startTyping();
    let membro = message.guild.member(
      message.mentions.users.first() ||
        client.users.cache.get(res[0]) ||
        message.author
    );
    const userDB = await client.db.Users.findOne({ _id: membro.id });
    try {
    const userDBnovo = await client.db.Users.findOne({ _id: membro.id });
    } catch(err) { new client.db.Users({_id: membro.id}).save();
    return message.channel.send("Você agora está registrado no nosso banco de dados!")
    }
    let Criado = moment(membro.user.createdAt).format("lll");
    let Criado2 = moment(membro.user.createdAt)
      .startOf("seconds")
      .fromNow();
    let Entrado = moment(membro.joinedTimestamp).format("lll");
    let Entrado2 = moment(membro.joinedTimestamp)
      .startOf("seconds")
      .fromNow();
    const canvas = Canvas.createCanvas(1280, 720);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://cdn.glitch.com/770d441b-300b-4eaa-9d98-ef9bbda28950%2Fbackground-perfil.jpg?v=1625675529182"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.font = `72px sans-serif`;
    context.fillStyle = "#ffffff";
    try {
    context.fillText(`${userDB.rep}`, 1080, canvas.height / 4.4);
    } catch (err) {
    context.fillText(`0`, 1080, canvas.height / 4.4);
    }

    context.font = `70px sans-serif`;
    context.fillStyle = "#ffffff";
    context.fillText(
      `${membro.displayName.match(/.{1,20}/g).join('\n')}`,
      canvas.width / 5.1,
      canvas.height / 5
    );
    
    context.font = `22px sans-serif`;
    context.fillStyle = "#ffffff";
    try {
    context.fillText(`${userDB.biografia.match(/.{1,78}/g).join('\n')}`, 10, 660);
    } catch (err) {
    context.fillText(`Biografia não definida! Use a?biografia <bio> para definir uma.`, 10, 660);
    }

    
    context.font = `24px sans-serif`;
    context.fillStyle = "#FF0000";
    try {
      let replace = userDB.casado[0].replace(/[<@!?>]/g, "");
      const nameMarried = client.users.cache.get(replace).tag;
      context.fillText(`${nameMarried}`, 890, 620);
    } catch (err) {
      context.fillText(`Ninguém`, 890, 620);
    }

    context.font = `21px sans-serif`;
    context.fillStyle = "#ffffff";
    context.fillText(`${Entrado} (${Entrado2})`, 820, 580);

    context.font = `14px sans-serif`;
    context.fillStyle = "#ffffff";
    context.fillText(`${Criado} (${Criado2})`, 340, 580);

    context.beginPath();
    context.arc(125, 125, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();

    const avatar = await Canvas.loadImage(
      membro.user.displayAvatarURL({ format: "jpg" })
    );
    context.drawImage(avatar, 25, 25, 200, 200);
    
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "perfil.png"
    );
    message.inlineReply(attachment);
    message.channel.stopTyping();
};
