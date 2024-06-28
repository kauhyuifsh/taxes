const { Client, GatewayIntentBits, AttachmentBuilder,EmbedBuilder, } = require('discord.js');
const numeral = require("numeral");
require('dotenv').config()
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMembers] });
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", async message => {
    let args = message.content.split(" ").slice(1).join(" "); 
  if (message.author.bot) return;
    if (message.content.startsWith('#wa') || message.content.startsWith('-wa') || message.content.startsWith('$wa') || message.content.startsWith('!wa') || message.content.startsWith('wa') || message.content.startsWith('.wa') ||message.content.startsWith('وسيط')){
      let args2 = args
  var number = numeral(args2).value()
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(number * (20) / (19) + (1)-(number))
      let tax3 = Math.floor(number * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
   let tax01 = Math.floor(number * (20) / (19) + (1))
   let tax021 = Math.floor(tax01 * (20) / (19) + (1))
      let errorembed3 = new EmbedBuilder()
   .setDescription(`
  **وسيط [رقم]
  #wa [number]**`)  
    .setColor("#f04747")
      if (!args2) return 
      let errorembed2 = new EmbedBuilder()
   .setDescription(`
  **وسيط [رقم]
  #wa [number]**`)
      .setColor("#f04747")
  if(number > 1000000000) return 
  if(number === null) return
      let errorembed = new EmbedBuilder()
      .setTitle(`**Something happened**`)
      .setColor("#f04747")
      if (args2 < 1) return 
  if(args2 > 1000000000) return 
      let embed3 = new EmbedBuilder()
      .setColor("#43b581")
      .setDescription(`1`)
      if (args2 == 1) return message.channel.send({embeds:[embed3]});
      let embed = new EmbedBuilder()
      .setColor("#43b581")
      .setThumbnail(message.guild.iconURL())
      .setTitle(`**ضريبه الوسيط** : **${tax2}**
                        **ضريبة التحويل** : **${tax3}**
                        **المبلغ المطلوب تحويله** : **${tax021}**`)
      message.channel.send({embeds:[embed]});
    }
    if (message.content.startsWith('#tax') || message.content.startsWith('ضريبة') || message.content.startsWith('$tax') || message.content.startsWith('-tax') ||message.content.startsWith('!tax') ||message.content.startsWith('.tax') || message.content.startsWith('tax') ||message.content.startsWith('ضريبه')){
      let args2 = args
  var number = numeral(args2).value()
  if(number === null) return
      let tax1 = Math.floor(number * (20) / (19) + (1))
      let tax5 = Math.floor(number - number * 5 / 100)
      let tax6 = Math.floor(number * 5 / 100)
      let errorembed3 = new EmbedBuilder()
      .setColor("#f04747")
   .setDescription(`
  **ضريبة [رقم]
  #tax [number]**`)
      if (!args2) return 
      let errorembed2 = new EmbedBuilder()
      .setColor("#f04747")
   .setDescription(`
  **ضريبة [رقم]
  #tax [number]**`)
      let errorembed = new EmbedBuilder()
      .setColor("#f04747")
      .setDescription(`**اقل من 1 مااقدر**`)
      if (args2 < 1) return message.channel.send({embed:[errorembed]});
      let embed3 = new EmbedBuilder()
      .setColor("#43b581")
      .setTitle(`1`)
      if (args2 < 1) return 
  if(number > 1000000000) return message.channel.send({embed:[new EmbedBuilder()
  .setImage('https://cdn.discordapp.com/emojis/752143616222167150.png?v=1')]})
      if(args2 > 1000000000) return 
      if (args2 == 1) return 
        const exampleEmbed5 = new EmbedBuilder()
        .setColor('#43b581')
        .setTitle(`كم لازم تحول عشان يوصل المبلغ بالكامل : ${tax1}\nكم بتوصل لـ الشخص: ${tax5}\n ضريبه اللي بتنسحب : ${tax6}`)
        message.channel.send({embeds:[exampleEmbed5]});
    }
  })


client.login(process.env.TOKEN)