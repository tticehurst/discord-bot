import { CommandInteraction, EmbedBuilder } from "discord.js";

/**
 *
 * @description A template for creating embeds
 * @extends EmbedBuilder
 * @param interaction The command interaction
 *
 */
export default class EmbedTemplate extends EmbedBuilder {
  constructor(interaction: CommandInteraction) {
    super();

    super.setColor("#00ff00");
    super.setFooter({
      text: `${interaction.commandName} | ${
        interaction.client.commands.get(interaction.commandName).data
          .description
      }`
    });
    super.setAuthor({
      name: interaction.user.username,
      iconURL: interaction.user.displayAvatarURL({
        size: 64,
        forceStatic: true
      })
    });

    super.setTimestamp(Date.now());
  }
}
