const Discord = require('discord.js')

module.exports = {
  name: "embedregistro",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
    message.delete();
    let embedregistro = new Discord.MessageEmbed()
    .setTitle("REGISTRANDO-SE!")
    .setDescription("Clique nas reações abaixo de acordo com seu registro! \n \nGênero\n🙎‍=Mulher \n🙍‍♂️=Homem \n👤=Não Binário \n \nIdade \n🧑=+18 \n🔞=-18 \n \nSexualidade \n👫=Hétero \n👬=LGBTQ+ \n \nEstado Cívil \n🧍‍♂️=Solteiro \n👩‍❤️‍💋‍👨=Namorando \n💍=Casado")
    .setThumbnail("https://cdn.discordapp.com/attachments/752390178861088870/840737418885595146/200w.gif")
    .setColor(client.cor)
message.channel.send(embedregistro)}