import { SlashCommandBuilder } from "discord.js";
import logger from "../logger";

/**
 * A template for slash commands
 *
 * @param filename The filename of the command (__filename)
 * @param description The description of the command
 *
 * @public filename
 * @public description
 */
export default class SlashTemplate {
  public name: string;
  public description: string;

  constructor(filename: string, description: string) {
    this.description = description;
    this.name = filename.split("/").pop()!.split(".").shift() || "";

    if (!this.name) {
      logger.error("Filename is undefined");
      throw new Error();
    }
  }

  /**
   *
   * @returns A slash command builder
   *
   */
  public builder() {
    return new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
  }
}
