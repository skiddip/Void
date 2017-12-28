var Discord = require('discord.js')
var bot = new Discord.Client();



bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '?'

  if (msg === prefix + 'PING') {
    message.channel.send('Pong!')
  }
  if (msg === prefix + 'HELP') {
    message.channel.send('Theese are the Commands ?Ping ?Help ?Info ?Updates')
  }
  if (msg === prefix + 'Info') {
    message.channel.send('This bot is not an bot like plays music or that stuff it only makes ddos protection and has banned words and its really good for mosly server who are new who doesnt have DDOS protection so i made this bot an made a succes! The creator of this bot is called SkiddiPlayz contact him through Discord SkiddiPlayz#9411')
  }


    if (sender.id === '395544261858164737') {
      return;
    }

});


bot.on('ready', () => {
   console.log('Bot Launched....')
});



bot.login('Mzk1NzMwNDAyMDI4ODE0MzU4.DSXIKw.Wj96-VE0kPaVl3b4nEpn6s-blyU')
