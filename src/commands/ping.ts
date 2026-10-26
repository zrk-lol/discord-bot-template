import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const ping: Command = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Check that the bot is alive"),
  async execute(interaction) {
    await interaction.reply({ content: `Pong · ${Math.round(interaction.client.ws.ping)} ms`, ephemeral: true });
  },
};
