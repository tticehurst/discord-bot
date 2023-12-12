import { CommandInteraction, EmbedBuilder } from "discord.js";

/**
 *
 * @description A template for creating embeds
 * @extends EmbedBuilder
 * @param command The slash command template
 *
 */
export default class EmbedTemplate extends EmbedBuilder {
  constructor(interaction: CommandInteraction) {
    super();

    super.setColor("#00ff00");
    super.setFooter({
      text: `${interaction.commandName} | ${interaction.command!.description}`
    });
    super.setAuthor({
      name: "shnopy319",
      iconURL: interaction.user.displayAvatarURL({
        size: 64,
        forceStatic: true
      })
    });
    super.setTimestamp(Date.now());
  }
}
