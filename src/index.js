const Discord = require('discord.js');
const commandHandler = require('./commands');
require('dotenv').config();

const client = new Discord.Client();



client.once('ready', () => {
  console.log(' 🤖🕶🏍🔫 Beep boop! I am ready!');
});



client.on('message', commandHandler);


client.login(<BOT TOKEN>);
