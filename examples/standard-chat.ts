import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";

config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  const response = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: "You are a friendly assistant",
    messages: [{ role: "user", content: "Hello, world" }]
  });
  console.log(response);

  const message = response.content[0];
  console.log(message);
}

main();
