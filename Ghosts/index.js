const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc3MjQ5ODEwMTE5ODE1Mjk5.GLw-Ce.DdWqy0eT55hq6KAo_FTsEuHY_dgojzX2w0VhH0"

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.on("ready", () => {
  console.log(`Logged into ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
  if (message.content == "hi"){
    message.reply("Shut up nigga")
  }
})

client.login(process.env.TOKEN)