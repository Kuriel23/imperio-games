const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
  name: "embedregras",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
  
  let button = new MessageButton()
  .setStyle('url')
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
  .setURL("https://superhentais.vip")  
  .setLabel('SuperHentais') 
  
  const row = new MessageActionRow()
    .addComponent(button)
    .addComponent(button1)
    .addComponent(button2)
    .addComponent(button3)
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Bem-vindo", "https://image.flaticon.com/icons/png/512/760/760205.png")
    .setDescription("Seja bem-vindo ao Discord do [Animes Online Games]("+client.games+"). Aqui pode-se conversar com outros otakus, mas antes é necessário seguir regras simples: \n\n**1.** Não ofenda outros membros do servidor \n**2.** Má convivência não será tolerada. \n**3.** Não vazem informações pessoais não permitidas; \nEx: Nomes, fotos, etc... **banimento imediato**  \n**4.** Não cobre postagem de episódios/animes à equipe;\n**5.** Spoilers são permitidos no <#691428937515139143>; \n**6.** Evite mandar mensagens diretas para os membros da equipe, comunique-se através do chat público; \n**7.** Não enviar links de sites de séries que não sejam o próprio site ou parceiros; \n:pushpin: [Animes Online Games]("+client.games+") \n:pushpin: [Animes Orion]("+client.orion+") \n:pushpin: [My Animes List]("+client.hd+") \n:pushpin: [Super Hentais](https://superhentais.vip) \n**8.** Não use comando dos bots fora da área especificada; \n<#785267916811403274> é o canal correto. \n**9.** Flood e Spam são proibidos, já o Caps Lock é liberado, com uso moderado. \n**10.** É PROIBIDO usar trava discord **banimento imediato** \n**11.** É PROIBIDO partilhar tela assistindo animes/hentais que não façam parte dos parceiros citados acima **banimento imediato** \nLegal né? Porém, se não obedecer as regras, você será punido. :3 \n\n:pushpin: [Convide seus Amigos Aqui](https://discord.com/invite/e7Y78QS93j) \nQuaisquer mudanças nas Regras podem ser feitas sem aviso prévio!")                  
    .setImage("https://cdn.discordapp.com/attachments/789646986517020684/813141180736864307/AVISOS.png")
    .setColor(client.cor);
    message.channel.send("", {embed:embed, component: row})
    }