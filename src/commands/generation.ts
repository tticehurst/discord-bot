import EmbedTemplate from "@imports/templates/embedTemplate";
import SlashTemplate from "@imports/templates/slashTemplate";
import getJSON from "@imports/webJSON";
import { APIEmbedField, CommandInteraction } from "discord.js";

export default {
  data: new SlashTemplate(
    __filename,
    "Shows the current UK power generation mix"
  ).builder(),

  async run(interaction: CommandInteraction) {
    const data = await getJSON("https://api.carbonintensity.org.uk/generation");
    const fields: APIEmbedField[] = [];

    data.data.generationmix.forEach((mix: { fuel: string; perc: number }) => {
      fields.push({
        name: mix.fuel,
        value: `${mix.perc}%`,
        inline: true
      });
    });

    const embed = new EmbedTemplate(interaction);
    embed.addFields(fields);

    await interaction.reply({ embeds: [embed] });
  }
};
