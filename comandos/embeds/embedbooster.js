const Discord = require('discord.js')

module.exports = {
  name: "embedbooster",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");

  let embed = new Discord.MessageEmbed()
    .setTitle("Booster Server")
    .setDescription("<a:rainbowleft:840243723958222868> Impulsionando o servidor você nos apoia para que sempre possamos trazer novidades e mais diversões!!! \n \n**COMO FAÇO PARA IMPULSIONAR O SERVER?** \n \n<a:nitro:840242183478706266> Para isso você que tem discord nitro recebe 30% de desconto em todas as compras do Server Boost. \n \nGuia Passo a Passo: \n<a:rainbowleft:840243723958222868>  1. Selecione seu servidor e vá para o Server Boost no menu suspenso das Configurações do Servidor! \n<a:rainbowleft:840243723958222868> 2. Confirme sua seleção e verifique se selecionou o servidor correto para impulsionar \n<a:rainbowleft:840243723958222868> 3. Escolha o número de Server Boosts que você gostaria de comprar! \n<a:rainbowleft:840243723958222868> 4. Revise e confirme seu pagamento final pela compra de hoje! \n<a:rainbowleft:840243723958222868> 5. SEU BOOST ESTÁ AGORA ATIVO! \n \n<a:pinkflame:840242875937587250>**QUAIS AS VANTAGENS EM DAR BOOST NO SERVER?**<a:pinkflame:840242875937587250> \nCargo especial e destacado dentro do servidor --- <@&654435562295656478> \n1 cargo com o seu nome e cor exclusiva \nPermissão para mandar imagens no chat geral \nSímbolo que fica destacado ao lado do seu nome no servidor,\nmostrando a todos que você deu boost. \n \n<a:boostingtop:840242639853060187>**Nos ajude a continuar criando coisas novas para o servidor**<a:boostingtop:840242639853060187>",)                  
    .setImage("https://cdn.discordapp.com/attachments/718491148263489587/733369225774628874/booster.png")
    .setFooter("AnimesOnline.Games", message.guild.iconURL()).setTimestamp()
    .setColor(client.cor);
    message.guild.channels.cache.get('707256199069958255').send("<@803732079959474236>", embed)}