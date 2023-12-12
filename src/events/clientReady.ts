import { Events } from "discord.js";

import logger from "@imports/logger";

export default {
  name: Events.ClientReady,
  run() {
    logger.info("Client is ready");
  }
};
