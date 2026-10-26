import type { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";

export type Command = {
  data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
  /** Cooldown per user, in seconds. */
  cooldown?: number;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};
