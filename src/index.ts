import { Client, Events, GatewayIntentBits } from "discord.js";
import { commands } from "./commands/index.js";
import { loadConfig } from "./config.js";
import { createCooldowns } from "./cooldowns.js";

const config = loadConfig();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const byName = new Map(commands.map((command) => [command.data.name, command]));
const cooldown = createCooldowns();

client.once(Events.ClientReady, (ready) => console.log(`Logged in as ${ready.user.tag}`));

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = byName.get(interaction.commandName);
  if (!command) return;
  const wait = cooldown(command.data.name, interaction.user.id, command.cooldown);
  if (wait) {
    await interaction.reply({ content: `Please wait ${wait}s before using /${command.data.name} again.`, ephemeral: true });
    return;
  }
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`/${command.data.name} failed`, error);
    const reply = { content: "Something went wrong while running this command.", ephemeral: true };
    if (interaction.replied || interaction.deferred) await interaction.followUp(reply);
    else await interaction.reply(reply);
  }
});

await client.login(config.DISCORD_TOKEN);
