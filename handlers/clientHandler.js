const {Collection} = require("discord.js")

/**
 * @param client
 */
module.exports = (client) => {
    client.commands = new Collection();
    client.events = new Collection();
};