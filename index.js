
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
    handleUploads();
    handleNewsGames();
  }, 60000);
  let activities = [
      `Prefixos: i!, i., i?`,
      `imperiogames.ml`,
      `www.imperioanimes.ml`
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

// [ - YOUTUBE TIMER ]

function handleUploads() {
  client.request
    .parseURL(
      `https://www.youtube.com/feeds/videos.xml?channel_id=UCL7PC_sP5Rc3uUEao4FwJ4Q`
    )
    .then(data => {
      if (client.db2.fetch(`postedVideos`).includes(data.items[0].link)) return;
      else {
        client.db2.set(`videoData`, data.items[0]);
        client.db2.push("postedVideos", data.items[0].link);
        let parsed = client.db2.fetch(`videoData`);
        let linkyt = parsed.link.replace(
          "https://www.youtube.com/watch?v=",
          "https://youtu.be/"
        );
        client.channels.cache
          .get("711215124454703104")
          .send(linkyt);
      }
    });
}

function handleNewsGames() {
  client.request
    .parseURL(
      `https://imperiogames.ml/feed`
    )
    .then(data => {
      if (client.db2.fetch(`postedGames`).includes(data.items[0].link)) return;
      else {
        client.channels.cache.get("670760689912119336").send(
          `${data.items[0].title} <@&727270078789189652>\n${data.items[0].link}`
          );
        client.db2.set(`GamesData`, data.items[0]);
        client.db2.push("postedGames", data.items[0].link);
      }
    });
}

// [ - LOGIN ]

client.login(process.env.token).then(() => console.log(`[Bot Iniciado] | Império Network`));