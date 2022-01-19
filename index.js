const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Olá Zé!'));

app.listen(port, () => console.log(`[Website Iniciado] | https://localhost:${port}`));

// [ - CONSTANTES ]

const moment = require("moment");
moment.locale("pt-br");
const Discord = require("discord.js");
const client = new Discord.Client({ reconnect: true });
const fs = require("fs");
const ms = require("ms");
const axios = require("axios").default;
const cheerio = require("cheerio");
require("dotenv").config();
const { MessageButton, MessageActionRow } = require("discord-buttons");
require("discord-buttons")(client);
require("./replies.js");
const {PlayTogether} = require('@miudiscord/together')

// [ - CLIENT ASSETS ]

client.canais = JSON.parse(process.env.canais)
client.together = new PlayTogether(client);
client.commands = new Discord.Collection();
client.db = require("./database.js");
client.db2 = require("quick.db");
client.cor = "#D62F2F";
client.ok = "https://image.flaticon.com/icons/png/512/1722/1722017.png";
client.warn = "https://image.flaticon.com/icons/png/512/594/594801.png";
client.err = "https://image.flaticon.com/icons/png/512/753/753345.png";
client.catToken = process.env.catToken;
client.request = new (require("rss-parser"))();

// [ - PROCESSOS ]

process.on("uncaughtException", e => {
  console.log(`-> Exceção não capturada: ${e.toString()}`);
});

process.on("unhandledRejection", (r, p) => {
  console.log(`-> Rejeição não tratada: ${r.stack || r}`);
});

// [ - HANDLER ]

const folders = fs.readdirSync("./comandos");
const events = fs.readdirSync("./eventos").filter(file => file.endsWith(".js"));
for (const folder of folders) {
  const commands = fs
    .readdirSync(`./comandos/${folder}`)
    .filter(file => file.endsWith(".js"));
  for (const file of commands) {
    const command = require(`./comandos/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

for (const file of events) {
  const event = require(`./eventos/${file}`);
  if (event.type == "ready") {
    client.on(event.type, () => event.run(client));
  } else if (event.type == "guildMemberAdd") {
    client.on(event.type, member => event.run(member, client));
  } else if (event.type == "guildMemberRemove") {
    client.on(event.type, member => event.run(member, client));
  } else {
    client.on(event.type, message => event.run(message, client));
  }
}

// [ - EVENTO READY / PRESENCE DO BOT ]

client.on("ready", async () => {
  setInterval(() => {
    handleNewsAnimes();
	//handleTwitter();
  }, 60000);
  let activities = [
      `Prefixos: i!, i., i?`,
      `imperionetwork.ml`,
      `www.imperionetwork.ml`
    ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }),
    30000
  );
});

async function handleNewsAnimes() {
  const doc = await client.db.News.findOne({_id: "1"});
  client.request
    .parseURL(
      `https://imperionetwork.ml/feed`
    )
    .then(data => {
      if (doc.newsdata.includes(data.items[0].link)) return 0;
	  const scrape = require("metadata-parser");
	  scrape(data.items[0].link).then(function(metadata) {let img = metadata.openGraph.image.url
      client.channels.cache.get(client.canais.animes).send("<@&727270078789189652>", new Discord.MessageEmbed().setAuthor(" » Clique para ler", "https://imperionetwork.ml/wp-content/uploads/2021/12/wp-min.png", data.items[0].link).setTitle("📰 Nova Notícia").addField("Título:", data.items[0].title).setImage(img).setTimestamp().setColor(client.cor)
      );
      doc.newsdata = data.items[0].link
      doc.save();
    });
	});
}

async function handleTwitter() {
  const doc = await client.db.News.findOne({_id: "1"});
  client.request
    .parseURL(
      `https://rsshub.app/twitter/user/imp3rionetwork/`
    )
    .then(data => {
      if (doc.twitterdata.includes(data.items[0].link)) return 0;
	  const scrape = require("metadata-parser");
	  scrape(data.items[0].link).then(function(metadata) {let img = metadata.openGraph.image.url
      client.channels.cache.get(client.canais.twitter).send(data.items[0].link);
      doc.twitterdata = data.items[0].link
      doc.save();
    });
	});
}

// [ - LOGIN ]

client.login(process.env.token).then(() => console.log(`[Bot Iniciado] | Império Network`));
