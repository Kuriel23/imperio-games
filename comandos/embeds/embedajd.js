const Discord = require('discord.js')

module.exports = {
  name: "embedajd",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let PrimeirasEmbed = new Discord.MessageEmbed()
    .setTitle("Recrutando para Ajudante!")
    .setDescription("<a:greenflame:714618368140902470>**Seja um ajudante para que serve um ajudante?**<a:greenflame:714618368140902470>\n\n<a:seta:737769966798897255>Ajudar os membros com dúvidas\n<a:seta:737769966798897255>Ajudar os que entrar no servidor para reportar erros!\n<a:seta:737769966798897255>Cobrar os porteiros e movimentadores\n<a:seta:737769966798897255>Manter o chat organizado sem flood de gif e emoji\n<a:seta:737769966798897255>Acabar com badernas caso venha acontecer\n<a:seta:737769966798897255>Tratar todos com total respeito independente do cargo, sexo, cor etc...\n\n<a:greenflame:714618368140902470>**REQUISITOS:**<a:greenflame:714618368140902470>\n\n<a:seta:737769966798897255>Estar no servidor a 1 mês ou 3 semanas no mínimo\n<a:seta:737769966798897255>Estar online na hora que começar uma baderna no chat geral\n<a:seta:737769966798897255>Ser paciente e atencioso!\n\n<a:tiro:679860756585381923>Se estiver interessado venha fazer parte da Staff como ajudante, faça o formulário, clique [aqui](https://forms.gle/9PqTnj5hidFyqMaz6)\n<a:pipoca:786260802385739828>Chefes: <@609935159982161931>, <@703091699387203604>, <@354233941550694400>, <@690232318752981066> e <@724758227547455578>")
    .setImage("https://cdn.discordapp.com/attachments/731648781707378719/796404320270417940/seja_ajudante2.png")
    .setColor(client.cor)
message.channel.send(PrimeirasEmbed)}
