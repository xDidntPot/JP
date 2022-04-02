const fs = require("fs");

/**
 * @param client
 */
module.exports = (client) => {
    const eventsDirs = fs.readdirSync("./events/")

    eventsDirs.forEach(evtDir => {
        const eventsFiles = fs.readdirSync(`./events/${evtDir}/`).filter(f => f.endsWith(".js"));

        eventsFiles.forEach(file => {
            const event = require(`../events/${evtDir}/${file}`);
            const eventName = file.split(".")[0].trim();

            client.on(eventName, event.bind(null, client))
            console.log("Loaded event: " + eventName);
        });
    });
}