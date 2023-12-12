import {
  Client,
  Collection,
  GatewayIntentBits,
  Routes,
  REST
} from "discord.js";
import { config } from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";

import filterTsJs from "!imports/filterTsJs";
import logger from "!imports/logger";
import { commands, events } from "!imports/paths";

config();

const commandFiles = readdirSync(commands).filter(filterTsJs);
const eventFiles = readdirSync(events).filter(filterTsJs);

const commandsAsJSON: JSON[] = [];

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildMessageReactions
  ]
});

const rest = new REST().setToken(process.env.TOKEN!);

client.commands = new Collection();

commandFiles.forEach((fileName) => {
  const command = require(join(commands, fileName)).default;

  if (command.data && command.run) {
    client.commands.set(command.data.name, command);
    commandsAsJSON.push(command.data.toJSON());
  } else {
    logger.warn(
      `Command ${fileName} is missing either a data or execute property`
    );
  }
});

eventFiles.forEach((fileName) => {
  const event = require(join(events, fileName)).default;

  client.on(event.name, (...args) => {
    event.run(...args);
  });
});

client.login(process.env.TOKEN!).then(async () => {
  if (!client.user) return logger.error("Client user is undefined");
  await rest.put(Routes.applicationCommands(client.user.id), {
    body: commandsAsJSON
  });

  logger.info("Logged in");
  logger.info(`Loaded: ${commandFiles.map((f) => f.split(".")[0]).join(", ")}`);
});
