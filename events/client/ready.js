/**
 * @param client
 */
module.exports = (client) => {
    console.log(`JP is now running as ${client.user.tag} in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
}