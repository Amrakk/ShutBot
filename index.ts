import { Client, GatewayIntentBits, Events, ChannelType, } from "discord.js";
import { getShutQuote } from "./ai.ts";

const botToken = process.env.BOT_TOKEN;
const shutRate = parseFloat(`${process.env.SHUT_RATE}`) || 1;
if (!botToken) throw new Error("Token not found");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageTyping,
    ],
});

client.on(Events.TypingStart, async ({ channel, user }) => {
    if (Math.random() > shutRate) return;
    const logChannel = await client.channels.fetch(channel.id);

    if(!logChannel || logChannel.type !== ChannelType.GuildText) return;

    const quote = await getShutQuote();
    logChannel.send(`<@${user.id}> \n${style(quote)}`);
});

client.on(Events.ClientReady, async (client) => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setStatus("invisible");
});

client.login(botToken);

function style(str: string) {
    return  `> ### ${str}`;
}
