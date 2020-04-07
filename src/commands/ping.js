module.exports = async (msg, args) => {
  //await msg.reply('pong');
  await msg.channel.send('pong');
  console.log('Ping Pong! (sent)');
};
