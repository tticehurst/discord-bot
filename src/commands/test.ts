import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import bent from "bent";

const getJSON = bent("json");

export default {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test command"),

  async run(interaction: CommandInteraction) {
    const data = await getJSON("https://api.carbonintensity.org.uk/generation");

    await interaction.reply({
      content: `The current generation is ${JSON.stringify(
        data.data.generationmix
      )}`
    });
  }
};
