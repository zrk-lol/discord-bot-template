import { describe, expect, it } from "vitest";
import { commands } from "./commands/index.js";
import { loadConfig } from "./config.js";
import { createCooldowns } from "./cooldowns.js";

describe("commands", () => {
  it("have unique, valid names", () => {
    const names = commands.map((command) => command.data.name);
    expect(new Set(names).size).toBe(names.length);
    for (const name of names) expect(name).toMatch(/^[a-z0-9_-]{1,32}$/);
  });
});

describe("cooldowns", () => {
  it("block a second use until the delay is over", () => {
    let now = 0;
    const cooldown = createCooldowns(() => now);
    expect(cooldown("info", "u1", 5)).toBe(0);
    now = 2000;
    expect(cooldown("info", "u1", 5)).toBe(3);
    expect(cooldown("info", "u2", 5)).toBe(0);
    now = 5000;
    expect(cooldown("info", "u1", 5)).toBe(0);
  });
});

describe("config", () => {
  it("explains what is missing", () => {
    expect(() => loadConfig({})).toThrow(/DISCORD_TOKEN is missing/);
  });
});
