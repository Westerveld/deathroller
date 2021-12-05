const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('dr').setDescription('random rolls').addIntegerOption(option => option.setName('num').setDescription('the max number').setRequired(true)),
	new SlashCommandBuilder().setName('roll').setDescription('random rolls').addIntegerOption(option => option.setName('num').setDescription('the max number').setRequired(true)),
	new SlashCommandBuilder().setName('deathroll').setDescription('random rolls').addIntegerOption(option => option.setName('num').setDescription('the max number').setRequired(true)),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);