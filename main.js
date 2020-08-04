const { Client, MessageEmbed, Discord, ClientUser } = require('discord.js');
const client = new Client();
const fs = require('fs');
const path = require('path');
//prefix = 'p!'

// Runs when Bot is ready
client.on('ready', () => {
  console.log("Bot Online!");

  client.user.setActivity("p!help");
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name);
  bot_commands = '727206999317676132';
  genral = '727206852923883551';
});
  let genralChannel = client.channels.cache.get(genral);
  let botChannel = client.channels.cache.get(bot_commands);
  //botChannel.send("I am online boiii!");
});

// help command
const help = {
  title: 'Help Command',
  //thumbnail: 'attachment://logo',
  color: '#bbdf32',
  fields: [
    {name: 'Want to generate random words?', value: `p!randomw`},
    {name: 'Want to generate some random questions?', value: `p!randomq`},
    {name: "Want to get inspired (aka get some quotes)?", value: `p!randomQuote`},
    {name: "Want to suggest a question?", value: `p!suggestion [Suggetion here]`},
    {name: 'Want to invite the bot?', value: `p!invite`},
  ],
  //image: 'attachment://logo',
};

client.on('message', message => {
  if (message.content === `p!help`) {
    message.channel.send({embed: help});
  };
});

// random word command
const wordPath = path.join(__dirname, './data/words.txt');
client.on('message', message => {
  if (message.content === "p!randomw") {
    fs.readFile(wordPath, 'utf-8', (err, data) => {
      if (err) throw err;
      let words = data.split("\n");
      let word = Math.floor(Math.random() * words.length);
      message.channel.send(words[word]);
    });
  };
});

const questionPath = path.join(__dirname, './data/questions.txt');
client.on('message', message => {
  if (message.content === "p!randomq") {
    fs.readFile(questionPath, 'utf-8', (err, data) => {
      if (err) throw err;
      let questions = data.split("\n");
      let question = Math.floor(Math.random() * questions.length);
      message.channel.send(questions[question]);
    });
  };
});

const questionPath = path.join(__dirname, './data/quotes.txt');
client.on('message', message => {
  if (message.content === "p!randomQuote") {
    fs.readFile(questionPath, 'utf-8', (err, data) => {
      if (err) throw err;
      let quotes = data.split("\n");
      let quote = Math.floor(Math.random() * questions.length);
      message.channel.send(quotes[quote]);
    });
  };
});

const suggestionChannel = client.guilds.get("727206852923883548").channels.get("730476984194433163")
if (message.content.startsWith("p!suggestion")) {
  const suggestion = message.content.replace("p!suggestion ", "")
  suggestionChannel.send(suggestion).then(msg => msg.react("✅")).then(msg => msg.react("❎"))

client.login(process.env.KEY);
