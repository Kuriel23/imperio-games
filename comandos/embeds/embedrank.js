const Discord = require("discord.js");

module.exports = {
  name: "embedrank",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Otaku, tente novamente quando for um Staff qualificado!");
  message.delete();
  let PrimeirasEmbed = new Discord.MessageEmbed()
    .setTitle("**Cargos de Rank do Servidor!**")
    .setDescription(
      "**Para conquistar esses cargos voce vai ter que interagir no chat quando + conversar com os membros mais pontos ganhará!**\n\n<@&849769368027136041> 155000 XP (Nível 155) \n \n<@&849764339081543710> 150000 XP (Nível 150) \n \n<@&840704469222293535> 100000 XP (Nível 100) \n \n<@&840701982565728288> 90000 XP (Nível 90) \n \n<@&840704222386192444> 80000 XP (Nível 80) \n \n<@&840703457539391488>  70000 XP (Nível 70) \n \n<@&840703516238020619> 60000 XP (Nível 60) \n \n<@&840703401444376626> 50000 XP (Nível 50) \n \n<@&840703335706394654> 40000 XP (Nível 40) \n \n<@&840703304186200065> 30000 XP (Nível 30) \n \n<@&840703152528293901> 20000 XP (Nível 20) \n \n<@&840702890234347550> 10000 XP (Nível 10) \n \n<@&840702688241123368> 5000 XP (Nível 5) \n \n**Apartir de** <@&840703335706394654> **ganha permissão de \nMidia no <#675087693474168864>**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/610604991748505621/817888220573728768/Goku_ssj_blue_broly_by_saodvd_dd7y7wd-pre.png"
    )
    .setFooter("AnimesOnline.Games", message.guild.iconURL())
    .setTimestamp()
    .setColor(client.cor);
  message.channel.messages.fetch({around: "840974624232833085", limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(PrimeirasEmbed);
    });
};
