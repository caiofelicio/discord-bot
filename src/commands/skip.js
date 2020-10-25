const playsong = require("./play").playSong

const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id)

    if (!queue) {
        return msg.reply("Nenhuma música está sendo reproduzida no momento!")
    }

    
    queue.songs.shift()
    bot.queues.set(msg.guild.id, queue)
    playsong(bot, msg, queue.songs[0])

}


module.exports = {
    name: "skip",
    help: "Pula para a próxima música",
    execute,
}