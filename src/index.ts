// import { Client, Collection, GatewayIntentBits, Routes, REST } from "discord.js";
import { config } from "dotenv";
import { readdirSync } from "fs";

import filterTsJs from "!imports/filterTsJs";
import { logger } from "!imports/logger";

config();

const commandFiles = readdirSync(`${__dirname}/commands`).filter(filterTsJs);
// const eventFiles = readdirSync("@events").filter(filterTsJs);

logger.info(commandFiles);
