import type { Command } from "../types.js";
import { info } from "./info.js";
import { ping } from "./ping.js";

/** Add a command here and it is registered and handled automatically. */
export const commands: Command[] = [ping, info];
