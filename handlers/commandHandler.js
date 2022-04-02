const fs = require("fs");

/**
 * @param client
 */
module.exports = (client) => {
    const cmdFolders = fs.readdirSync("./commands");

    cmdFolders.forEach(cmdFolder => {
        const cmdFiles = fs.readdirSync(`./commands/${cmdFolder}`).filter(f => f.endsWith(".js"));

        cmdFiles.forEach(file => {
            const command = require(`../commands/${cmdFolder}/${file}`);

            if (command.name && command.execute) {
                client.commands.set(command.name, command);
                console.log("Loaded command: " + command.name);
            } else {
                console.log("Failed to load command: " + command.name);
            }
        });
    });
};