import { REST, Routes } from 'discord.js';
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
        name: "lund",
        description: 'Replies with Boor'
    },
    {
        name: 'hello',
        description: 'Replies MotherFucker!',
    }
  ];

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');
      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();