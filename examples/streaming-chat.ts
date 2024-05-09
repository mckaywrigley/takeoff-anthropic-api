import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";

config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  await anthropic.messages
    .stream({
      messages: [{ role: "user", content: "Hello" }],
      model: "claude-3-haiku-20240307",
      system: "You are a friendly assistant",
      max_tokens: 1024
    })
    .on("text", (text) => {
      console.log(text);
    });
}

main();
