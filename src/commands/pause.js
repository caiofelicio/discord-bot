const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id)

    if (!queue) {
        return msg.reply("Nenhuma música está sendo reproduzida no momento!")
    }

    queue.dispatcher.pause()

}

module.exports = {
    name: "pause",
    help: "Pausa reprodução de música atual",
    execute
}