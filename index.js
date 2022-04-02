const {Client, Intents} = require("discord.js");
const fs = require("fs");
const config = require("./config/config.json");

/**
 * @type {Client<boolean>}
 */
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
});

client.config = config;

/**
 * @returns {Promise<void>}
 */
const init = async () => {
    const handlers = fs.readdirSync("./handlers/").filter((f) => f.endsWith(".js"));
    handlers.forEach((name) => {
        require(`./handlers/${name}`)(client);
    });

    await client.login(config.TOKEN);
}

init().then();