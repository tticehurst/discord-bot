import { Events, Interaction } from "discord.js";
import logger from "@imports/logger";

export default {
  name: Events.InteractionCreate,
  async run(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return logger.error(`Command ${command} does not exist`);

    try {
      await command.run(interaction);
    } catch (e) {
      logger.error(e);
      if (interaction.replied || interaction.deferred)
        await interaction.followUp({
          ephemeral: true,
          content: "There was an error while executing this command"
        });
      else
        interaction.reply({
          ephemeral: true,
          content: "There was an error while executing this command"
        });
    }
  }
};
