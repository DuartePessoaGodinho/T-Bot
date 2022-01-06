export default {
    newCommandList(client, guildID) {

        const guild = client.guilds.cache.get(guildID);

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
    }
}


