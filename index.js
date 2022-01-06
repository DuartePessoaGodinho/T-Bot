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

client.on('messageCreate', msg => {
    const message = msg.content.toLowerCase();
    if (message.includes('duarte') || message.includes('dgodinho') || message.includes('dûart')) {
        msg.reply('O que é que queres do boss ?');
        // msg.channel.send('new commit');
    }
})


client.login(process.env.TOKEN);
