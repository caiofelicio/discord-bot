const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id)

    if (!queue) {
        return msg.reply("Nenhuma música está sendo reproduzida no momento!")
    }

    queue.songs = []
    bot.queues.set(msg.guild.id, queue)
    queue.dispatcher.end()

}

module.exports = {
    name: "stop",
    help: "Para a reprodução de músicas",
    execute
}