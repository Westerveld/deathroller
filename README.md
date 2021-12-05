# deathroller
A discord bot for rolling a dice between 1 and a specified number

This bot requires node installed in your dev environment.

After downloading this repository, set up a bot for discord following this [tutorial](https://discordjs.guide/preparations/setting-up-a-bot-application.html).

The create a config.json with the following:

    {
        "token" : "your bot token"
        "clientId" : "The client id for your bot"
        "guildId" : "The guild id for the server you want the bot on"
    }
    
After this is set up, run the command setup using

`node deploy-commands.js`
    
This will register the commands on your server

Now all you need to do is run the bot
    
`node index.js`
