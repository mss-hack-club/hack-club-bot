import { Message } from "discord.js";
import { ICommand } from "../utils/types";

const command: ICommand = {
  name: "react",
  description:
    "Sends a message with a thumbs up reaction so people can say if they're good to move on or not.",
  alias: ["r"],
  syntax: "!react",
  async execute(message: Message, _args?: string[]) {
    console.log(
      `Command react started by user ${message.member!.user.tag} in guild ${
        message.guild!.name
      }.`
    );

    try {
      console.log("Sending reaction message.");
      const sentMessage = await message.channel.send(
        `React to this message with a :thumbsup: if you understand and are okay to proceed.`
      );
      await message.channel.messages.react(sentMessage, "👍");
      return await message.channel.messages.react(sentMessage, "👎");
    } catch (e) {
      console.log(
        `There was an error sending or reacting to a message in the guild ${
          message.guild!.name
        }! The error message is below:`
      );
      console.log(e);
      return;
    }
  },
};

export = command; // export the command to the main module
