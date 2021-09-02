const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
  name: "embeddenunciar",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
	message.delete();
  
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
  
  const row = new MessageActionRow()
    .addComponent(button)
    .addComponent(button1)
    .addComponent(button2)
  
let embed = new Discord.MessageEmbed()
.setTitle("DENÚNCIAR", "https://antissuborno.com.br/wp-content/uploads/2018/07/denuncia.png")
.setColor(client.cor)
.setDescription("➤ Para uma maior organização ao denunciar algum membro que infringir alguma de nossas regras confirme antes em <#675089976593088517> para não cometer alguma injustiça.\n\nCOMO DENUNCIAR:\n➤ Mande o ID ou o NICK e provas concretas (prints ou vídeos)\n➤ Marque algum <@&722804645818400789> que estiver online.\n➤ Não envie denúncias no pv dos staffs eles são ocupados e aqui fica visível para todos.\n\nEXEMPLO DE DENÚCIA:\n\n➥ Nick: <@512065475233054721> \n➥ ID: 512065475233054721\n➥ Motivo: Site NSFW no <#675087693474168864>\n\n**NÃO DA BAN SERVIDOR NO PV APENAS SE FOR RAID**")
.setThumbnail("https://antissuborno.com.br/wp-content/uploads/2018/07/denuncia.png")
 message.channel.messages.fetch({around: "844237387935514664", limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit("", {embed: embed, component: row });
    });
}