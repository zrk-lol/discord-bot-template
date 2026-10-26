# Discord bot template

A clean starting point for a Discord bot in TypeScript, by **Varhex by Ȥrk Team**.

Slash commands, a per-user cooldown, error handling that answers the user instead of crashing, and checked environment variables. Nothing more: add your own commands and ship.

## Start

```bash
npm install
cp .env.example .env   # fill in DISCORD_TOKEN and DISCORD_CLIENT_ID
npm run deploy         # register the slash commands
npm run dev            # start the bot with hot reload
```

## Add a command

1. Create `src/commands/my-command.ts` exporting a `Command` (see `ping.ts`).
2. Add it to the list in `src/commands/index.ts`.
3. Run `npm run deploy` again.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Bot with hot reload |
| `npm run deploy` | Registers the slash commands |
| `npm run build` / `npm start` | Production build and run |
| `npm test` | Unit tests (Vitest) |

## Français

Base de bot Discord en TypeScript : commandes slash, anti-spam par utilisateur, gestion d’erreurs et variables d’environnement vérifiées. Copiez `.env.example` en `.env`, remplissez le token, puis `npm run deploy` et `npm run dev`.

---
Made by [Varhex by Ȥrk Team](https://www.zrk.lol) · MIT licence
