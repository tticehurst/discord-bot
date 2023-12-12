import { EmbedBuilder } from "discord.js";
import SlashTemplate from "./slashTemplate";

/**
 *
 * @description A template for creating embeds
 * @extends EmbedBuilder
 * @param command The slash command template
 *
 */
export default class EmbedTemplate extends EmbedBuilder {
  constructor(command: SlashTemplate) {
    super();

    super.setColor("#00ff00");
    super.setFooter({ text: `${command.name} | ${command.description}` });
    super.setAuthor({ name: "shnopy319" });
    super.setTimestamp(Date.now());
  }
}
