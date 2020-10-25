const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id)

    if (!queue) {
        return msg.reply("Nenhuma música está sendo reproduzida no momento!")
    }

    queue.dispatcher.resume()

}


module.exports = {
    name: "resume",
    help: "Continua a reprodução da música atual",
    execute
}