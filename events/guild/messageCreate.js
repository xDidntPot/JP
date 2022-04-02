/**
 * @param client
 * @param message
 */
module.exports = (client, message) => {
    const PREFIX = client.config.PREFIX;

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/[ ]+/);
    const command = args.shift().toLowerCase();
    if (!command.length) return;

    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.execute(client, message, args, PREFIX)
        .then(() => message.react("✅"),
        );
};