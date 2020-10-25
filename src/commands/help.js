const execute = (bot, msg, args) => {
    let string = "\n===== **AJUDA** =====\n"

    bot.commands.forEach(command => {
        if (command.help) {
            string += `**!${command.name}**: ${command.help}\n`
        }
    });

    msg.reply(string)
}


module.exports = {
    name: "help",
    help: "Exibe os comandos aceitos",
    execute
}