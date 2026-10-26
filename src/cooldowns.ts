/** Per-user cooldowns, kept in memory. Returns the seconds left, or 0 if the command can run. */
export function createCooldowns(now: () => number = Date.now) {
  const until = new Map<string, number>();
  return (command: string, userId: string, seconds = 0) => {
    if (seconds <= 0) return 0;
    const key = `${command}:${userId}`;
    const left = (until.get(key) ?? 0) - now();
    if (left > 0) return Math.ceil(left / 1000);
    until.set(key, now() + seconds * 1000);
    return 0;
  };
}
