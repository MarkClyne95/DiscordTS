import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";

const token: string = "NDE0MjIxNTI3Njk4MTEyNTEy.G6gbD4.0cXAOJKKcTfnmtqbteM6SUGeBSjlOoYYAndzMA";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);

client.login(token);