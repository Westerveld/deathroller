// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const wait = require('util').promisify(setTimeout);

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

    //Death roll command
	if (commandName === 'dr' || commandName === 'roll' || commandName === 'deathroll') {
        const num = interaction.options.getInteger('num');
        await interaction.reply(interaction.user.username + " is rolling 1-"+ num +".");
        await wait(500);
        await interaction.editReply(interaction.user.username + " is rolling 1-"+ num +"..");
        await wait(500);
        await interaction.editReply(interaction.user.username + " is rolling 1-"+ num +"...");
        await wait(500);
        //random sometimes goes closer to 0 than 1, but we want to go to 1. add .5 so the lowest we can go is 0.5f, and will round up to 1
        var result = (Math.random() * num) + 0.5;
        console.log(result);
        result = Math.round(result);
        
        console.log(result);
		await interaction.editReply(interaction.user.username + " has rolled 1-"+num + " : " + result);
	} 
});


// Login to Discord with your client's token
client.login(token);