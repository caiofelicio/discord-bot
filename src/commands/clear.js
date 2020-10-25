const execute = async (bot, msg, args) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        return msg.reply("Você não tem permissão para usar esse comando!")
    }

    const deleteCount = parseInt(args[0], 10)
    if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
        return msg.reply("Digite um número entre 1 em 100")
    }

    const fetched = await msg.channel.messages.fetch( { limit: deleteCount + 1 })
    try {
    msg.channel.bulkDelete(fetched)
    } catch (erro) {
        console.log(erro)
    }
}

module.exports = {
    name: "clear",
    help: "Limpa as mensagens do servidor",
    execute
}