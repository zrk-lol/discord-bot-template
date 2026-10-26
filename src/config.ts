import { z } from "zod";

/** Environment variables, checked once at start-up with a clear error message. */
const schema = z.object({
  DISCORD_TOKEN: z.string().default("").pipe(z.string().min(1, "DISCORD_TOKEN is missing (see .env.example)")),
  DISCORD_CLIENT_ID: z.string().default("").pipe(z.string().min(1, "DISCORD_CLIENT_ID is missing (see .env.example)")),
  DISCORD_GUILD_ID: z.string().optional(),
});

export function loadConfig(env: NodeJS.ProcessEnv = process.env) {
  const parsed = schema.safeParse(env);
  if (!parsed.success) throw new Error(parsed.error.issues.map((issue) => issue.message).join("\n"));
  return parsed.data;
}
