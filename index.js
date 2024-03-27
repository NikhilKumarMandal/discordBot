import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages] });


client.on('messageCreate',message => {
    console.log(message.content);
})



client.login(process.env.TOKEN);