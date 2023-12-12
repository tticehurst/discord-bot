import EmbedTemplate from "@imports/templates/embedTemplate";
import SlashTemplate from "@imports/templates/slashTemplate";

import { APIEmbedField, CommandInteraction } from "discord.js";

export default {
  data: new SlashTemplate(
    __filename,
    "Shows a list of commands for the bot"
  ).builder(),

  async run(interaction: CommandInteraction) {
    const embed = new EmbedTemplate(interaction);
    const fields: APIEmbedField[] = [];

    interaction.client.commands.forEach((command) => {
      fields.push({
        name: command.data.name,
        value: `*${command.data.description}*`,
        inline: true
      });
    });

    embed.addFields(fields);

    await interaction.reply({ embeds: [embed] });
  }
};
