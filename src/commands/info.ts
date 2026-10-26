import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "../types.js";

export const info: Command = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Show information about a member")
    .addUserOption((option) => option.setName("member").setDescription("Member to look up")),
  cooldown: 5,
  async execute(interaction) {
    const user = interaction.options.getUser("member") ?? interaction.user;
    const embed = new EmbedBuilder()
      .setTitle(user.username)
      .setThumbnail(user.displayAvatarURL())
      .addFields({ name: "Account created", value: `<t:${Math.floor(user.createdTimestamp / 1000)}:D>` })
      .setColor(0x111111);
    await interaction.reply({ embeds: [embed] });
  },
};
