const Discord = require('discord.js');
const client = new Discord.Client();
//const {client, RichEmbed} = require ('discord.js') 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
var d = new Date();
var D = d.getDay();                 //día valor de 0 a 6
var H = 23 - (d.getHours());        //horario woe
var M = 59 - (d.getMinutes());      //minutos
var S = 59 - (d.getSeconds());      //segundos

  if (msg.content === 'RR help') {
    msg.channel.send('Actualmente estamos trabajando en este proyecto');
  }
 
  if (msg.content.includes('RR woe')){
    switch(D){
        case 0:                                                     //Domingo
            msg.channel.send('Faltan '+H+':'+M+':'+S+' Para WOE')
        break;

        case 1:                                                     //Lunes
            msg.channel.send('Faltan 3 días '+H+':'+M+':'+S+' Para WOE')
        break;

        case 2:                                                     //Martes
            msg.channel.send('Faltan 2 días '+H+':'+M+':'+S+' Para WOE')
        break;

        case 3:                                                     //Miercoles
            msg.channel.send('Falta 1 día '+H+':'+M+':'+S+' Para WOE')
        break;

        case 4:                                                     //Jueves
            msg.channel.send('Faltan '+H+':'+M+':'+S+' Para WOE')
        break;

        case 5:                                                     //Viernes
            msg.channel.send('Faltan 2 días'+H+':'+M+':'+S+' Para WOE')
        break;

        case 6:                                                     //Sabado
            msg.channel.send('Falta 1 día '+H+':'+M+':'+S+' Para WOE')
        break;
        default:
            msg.channel.send('Creo que ocurrio un error')
        break;
    }
  }
  
  if (msg.content.includes('RR hoy')){
        msg.channel.send('Todavía no está disponibles ten paciencia !!!');
  }
});

client.login('NjQ2NDcyNTAyOTQ3NjEwNjMz.XgE2qQ.zrgDM5CE2zvpH_6a_UtMOJWYkHk');