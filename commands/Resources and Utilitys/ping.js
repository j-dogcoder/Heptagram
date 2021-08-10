const { colors, cdn } = require('../../config.json');
const Discord = require('discord.js');


module.exports = {
	name: 'ping',
	aliases: ['p'],
	category: 'Utilitys',
	description: 'returns bot ping.',
	minArgs: 0,
	maxArgs: 0,
	expectedArgs: "",
	cooldown: '1m',

	execute: ({ message, client }) => {

		const ping = message.createdTimestamp - message.createdTimestamp;

		const embed = new Discord.MessageEmbed()
			.setTitle(`<:status_online:852483940291706900> Heptagram Ping's <:status_online:852483940291706900>`)
			.setColor(colors.heptagram)
			.setDescription(``)
			.addFields(
				{ name: '<:HeptagramLogo:874265504813056020> Heptagram Bot Latency:', value: `Bot Latency: \`${ping}ms\``, inline: true },
				{ name: 'Discord API Latency:', value: `\`${Math.round(message.client.ws.ping)}ms\``, inline: true },
				{ name: 'Discord Websocket Heartbeat:', value: `\`${client.ws.ping}ms.\``, inline: true })
			.addFields(
				{ name: '<:HeptrgramAPI:874269108919750766> Heptagram API:', value: 'Ping coming soon!', inline: false },
				{ name: 'Heptagram CDN:', value: `CDN Ping coming soon.`, inline: false })
			.setTimestamp()
			.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);

		message.reply({ embeds: [embed] });
	},
};