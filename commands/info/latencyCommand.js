const {MessageEmbed} = require("discord.js");

/**
 * @type {{name: string, description: string, execute: ((function(*, *, *, *): Promise<void>)|*)}}
 */
module.exports = {
    name: "latency",
    description: "Replies with the bots latency.",

    /**
     * @param client
     * @param message
     * @param _
     * @param __
     * @returns {Promise<void>}
     */
    execute: async (client, message, _, __) => {
        message.reply("Calculating latency...").then((msg) => {
            const ping = msg.createdTimestamp - message.createdTimestamp;

            const embed = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("JP | Latency Command")
                .setDescription(`Bot-Latency: ${ping}ms\nAPI-Latency: ${Math.round(client.ws.ping)}ms`)
                .setTimestamp(Date.now());

            msg.edit({
                embeds: [embed]
            });
        });
    }
};