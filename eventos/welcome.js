module.exports = {
  name: "welcome",
  type: "guildMemberAdd"
}

module.exports.run = async (member, client) => {
  
  const { MessageButton, MessageActionRow } = require('discord-buttons');
  const Discord = require("discord.js");
  
 if (member.guild.id != "531574473644703744") return;
  if (member.user.bot) return;
  
    let respostas = [
   
    "https://media.discordapp.net/attachments/842478646454386740/860630621884645397/bem-vindo-1.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630633852174376/bem-vindo-2.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630641103470592/bem-vindo-3.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630648916803584/bem-vindo-4.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630656714407946/bem-vindo-5.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630667854872676/bem-vindo-6.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630677053636608/bem-vindo-7.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630683994685441/bem-vindo-8.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630694945751080/bem-vindo-9.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630703367913492/bem-vindo-10.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630712712953876/bem-vindo-11.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630723621814332/bem-vindo-12.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630733453262868/bem-vindo-13.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630746695991316/bem-vindo-14.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860630751913312256/bem-vindo-15.gif",
    "https://media.discordapp.net/attachments/842478646454386740/860633503766020156/bem-vindo-16.gif",
];
  
  let resultado = Math.floor(Math.random() * respostas.length);
  
  let button = new MessageButton()
  .setStyle('url')
  .setEmoji('786029349883215902')
  .setURL(client.games) 
  .setLabel('Animes Online Games') 
  
  let button1 = new MessageButton()
  .setStyle('url')
  .setURL(client.orion) 
  .setLabel('Animes Orion') 
  
  let button2 = new MessageButton()
  .setStyle('url')
  .setURL(client.hd)  
  .setLabel('MyAnimesList') 
  
  let button3 = new MessageButton()
  .setStyle('url')
  .setURL('https://superhentais.vip/')  
  .setLabel('Super Hentais') 
  
  let button4 = new MessageButton()
  .setStyle('url')
  .setURL('https://www.animesgamesbot.ml/')  
  .setLabel('Meu Website')
  .setEmoji("🤖")
  
  const row = new MessageActionRow()
    .addComponent(button)
    .addComponent(button1)
    .addComponent(button2)
    .addComponent(button3)
    .addComponent(button4)
  
      let MembroEntrouEmbed = new Discord.MessageEmbed()
    .setAuthor("» Bem-vindo(a) ao Animes Online.Games!", member.user.displayAvatarURL())
    .setDescription(
      "<a:rainbowleft:840243723958222868>Veja as <#675089976593088517>!\n<a:rainbowleft:840243723958222868>Registre-se em <#750127598943862914>, basta clicar nas reações e divirta-se no nosso servidor!"
    )
    .setImage(respostas[resultado])
    .setColor(client.cor).setTimestamp()
  member.guild.channels.cache.get("868262491107504149").send("<@" + member.user + "> <@&840754328200544266>", { embed: MembroEntrouEmbed, component: row });

    var emojis = [
    "<a:1_animes:824099336992194560>",
    "<a:2_animes:824099215083962429>",
    "<a:3_animes:824099214728101899>",
    "<a:4_animes:824099215247802418>",
    "<a:5_animes:824099215159590952>",
    "<a:6_animes:824099215080030218>",
    "<a:7_animes:824099215172829224>",
    "<a:8_animes:824099215164702760>",
    "<a:9_animes:824099215256715274>",
    "<a:0_animes:824099336915910666>"
  ];
  var numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var numero = member.guild.memberCount;
  var array = numero.toString().split("");
  var x = "";
  for (var i = 0; i < array.length; i++) {
    var index = numeros.indexOf(array[i]);
    x = x + emojis[index];
  }
  member.guild.channels.cache.get("675087693474168864").setTopic("O servidor possui " + x + " otakus | AnimesOnlineGames.com", "Culpa do: "+ member.user.tag);

};