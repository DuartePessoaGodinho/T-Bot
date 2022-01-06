import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({ 
    intents: [ 
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES
    ] 
}); 

client.on("ready", () => {
  console.log('Logged in.')
})

client.on('message', msg => {
  if(msg.content === "ping") {
    // msg.reply('pong');
    msg.channel.send('oix');
  }
})


client.login(process.env.TOKEN);
