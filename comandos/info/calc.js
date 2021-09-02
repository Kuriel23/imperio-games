const { create, all } = require('mathjs');
const Discord = require('discord.js');
const Canvas = require('canvas')

module.exports = {
  name: "calc",
  description: "",
  aliases: ["calculadora", "calculator"]
}

module.exports.run = async (client, message, res) => {

  const ajuda = new Discord.MessageEmbed()
    .setAuthor("» Calc", "https://icons.iconarchive.com/icons/martz90/circle/512/calculator-icon.png")
    .setDescription(`Irá fazer o simples e difícil trabalho de uma mente matemática`)
    .addField("Como usar", `\`a?calc <Expressão Matemática>\`\n\`calc 10+10\``)
    .setColor(client.cor)
    .setFooter(`${message.author.tag}`, message.author.avatarURL())
  
if (!res.length) return message.inlineReply(ajuda);

const math = create(all);
const limitedEvaluate = math.evaluate;

math.import({
    import: function () { throw new Error('A função import está desativada') },
    createUnit: function () { throw new Error('A função createUnit está desativada') },
    evaluate: function () { throw new Error('A função evaluate está desativada') },
    parse: function () { throw new Error('A função parse está desativada') },
    simplify: function () { throw new Error('A função simplify está desativada') },
    derivative: function () { throw new Error('A função derivative está desativada') },
    format: function () { throw new Error('A função format está desativada') }
}, { override: true });

const expr = res.join(' ').toLowerCase();

let result;

try {result = limitedEvaluate(expr);} catch (err) {return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Expressão Inválida", client.err).setColor(client.cor));}

if (result === Infinity || result === -Infinity || result.toString() === 'NaN') result = 'Impossível determinar';
if (typeof result === 'function') return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Expressão Inválida", client.err).setColor(client.cor)); 

    const canvas = Canvas.createCanvas(322, 573);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/553700024211734529/872187936370753566/calculadora.png"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.font = `48px Impact`;
    context.fillStyle = "#ffffff";
    context.fillText(`${result}`, 10, 150);
  
    context.beginPath();
    context.arc(125, 125, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "calc.png"
    );
    message.inlineReply(attachment);
}