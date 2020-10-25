const Discord = require("discord.js")
const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path");
const { mainModule } = require("process");
const MessageEmbed = require("discord.js").MessageEmbed;


dotenv.config()

const bot = new Discord.Client()
bot.commands = new Discord.Collection()
bot.queues = new Map()


const commandFiles = fs.readdirSync(path.join(__dirname, "/commands")).filter((filename) => filename.endsWith(".js"))

for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`)
    
    bot.commands.set(command.name, command)
}

bot.login(process.env.TOKEN)

bot.on("ready", (msg) => {
    console.log("Estou online!")
})

bot.on("message", (msg) => {

    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return

    const args = msg.content.slice(process.env.PREFIX.length).split(" ")
    const command = args.shift()
    try {
        bot.commands.get(command).execute(bot, msg, args)
    } catch (e) {
        return msg.reply('comando invalido')
    }
})