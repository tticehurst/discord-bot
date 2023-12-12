import { normalize } from "path";

let commands = normalize(`${__dirname}/../commands`);
let events = normalize(`${__dirname}/../events`);

export { commands, events };
