import { MessageEmbed } from "discord.js";

import { Heptagram } from "../../interfaces/Heptagram";
import { heptagramLogHandler } from "../../utils/heptagramLogHandler";

/**
 * Sends a notification to the debug hook when Heptagram has connected to
 * Discord and is ready to receive events.
 *
 * @param {Heptagram} Heptagram's Client instance.
 */
export const ready = async (Heptagram: Heptagram): Promise<void> => {
  heptagramLogHandler.log("debug", "Fetching reaction role data...");
  const readyEmbed = new MessageEmbed();
  readyEmbed.setTitle("Heptagram is online");
  readyEmbed.setDescription(
    `${Heptagram.user?.username || "Heptagram"} has come online.`
  );
  readyEmbed.setTimestamp();
  readyEmbed.setColor(Heptagram.colors.success);
  readyEmbed.setFooter({ text: `Heptagram v${Heptagram.configs.version}` });


  await Heptagram.debugHook.send({ embeds: [readyEmbed] });
  heptagramLogHandler.log("debug", "Discord ready!");


  heptagramLogHandler.log("debug", "Loaded PM2 counts!");
  Heptagram.pm2.metrics.events.mark();
};