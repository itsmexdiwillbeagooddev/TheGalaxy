const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '!'
ti={}  
spee={};


client.on('ready', () => {
     client.user.setActivity("Galaxy Server",{type: 'WATCHING'})
 
});



client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Not Verify'));
});

bot.on("message", message => {
  if(message.content.startsWith("/verify")) {
    let num = Math.floor((Math.random() * 4783) + 10);
 
    message.channel.send(`Please type to verify: **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "Verified"));
      }).catch(() => {
        m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
      });
    });
  }
});




client.login(process.env.BOT_TOKEN);
