import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
import commands from './commands.js'

dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
    console.log('Logged in.')

    const guildIDTest = '928630041938628668';
    const guildId = '534052925102620706';

    /** 
        const guild = client.guilds.cache.get(guildIDTest);
        // const guild = client.guilds.cache.get(guildId);
    
        let commands;
    
        if (guild) {
            commands = guild.commands;
        } else {
            commands = client.application?.commands;
        }
    
        commands.create({
            name: 'stream',
            description: 'Indica de quem queres ver a stream',
            options: [
                {
                    name: 'streamer',
                    description: 'Procuro o streamer mencionado',
                    required: true,
                    type: 'STRING'
                }
            ]
        });
        */

    commands.newCommandList(client, guildId);
    commands.newCommandList(client, guildIDTest);

})

client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;
    const streamerPicked = options.getString('streamer');

    if (commandName === 'stream') {
        if (streamerPicked.toLowerCase().includes('duarte') || streamer.toLowerCase().includes('r3voltec')) {
            interaction.reply({
                content: 'https://www.twitch.tv/r3voltec',
            })
        }

    }
})

client.on('messageCreate', msg => {
    const message = msg.content.toLowerCase();
    if (message.includes('duarte') || message.includes('dgodinho') || message.includes('dûart')) {
        msg.reply('O que é que queres do boss ?');
    }

    if (message === '!stream') {
        msg.channel.send('Stream do r3voltec: https://twitch.tv/r3voltec');
    }
})



client.login(process.env.TOKEN);
