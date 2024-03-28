import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent
        ]
    });


client.on('messageCreate',message => {
    if (message.author.bot) return;
    message.reply({
        content: "Hi from Nikhil"
    })
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    console.log(`Received command: ${commandName}`);
  
    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'lund') {
        await interaction.reply('Boor');
    } else if (commandName === 'hello') {
        await interaction.reply('MotherFucker!');
    }
  })



client.login(process.env.TOKEN);