const Discord = require('discord.js');
const commandHandler = require('./commands');
require('dotenv').config();

const client = new Discord.Client();



client.once('ready', () => {
  console.log(' 🤖🕶🏍🔫 Beep boop! I am ready!');
});



client.on('message', commandHandler);

//for security using .env public facing
//however unable to conntect to Discord client during development
//use key string during dev 
client.login(process.env.BOT_TOKEN);
