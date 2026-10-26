import { REST, Routes } from "discord.js";
import { commands } from "./commands/index.js";
import { loadConfig } from "./config.js";

/** Registers the slash commands: on one server if DISCORD_GUILD_ID is set (instant), globally otherwise. */
const config = loadConfig();
const rest = new REST().setToken(config.DISCORD_TOKEN);
const body = commands.map((command) => command.data.toJSON());
const route = config.DISCORD_GUILD_ID
  ? Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.DISCORD_GUILD_ID)
  : Routes.applicationCommands(config.DISCORD_CLIENT_ID);
await rest.put(route, { body });
console.log(`Registered ${body.length} commands ${config.DISCORD_GUILD_ID ? "on the test server" : "globally"}.`);
