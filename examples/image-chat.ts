import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";

config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg";
const image_media_type = "image/jpeg";
const image_array_buffer = await (await fetch(image_url)).arrayBuffer();
const image_data = Buffer.from(image_array_buffer).toString("base64");

async function main() {
  const response = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: "You are a friendly assistant",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: image_media_type,
              data: image_data
            }
          }
        ]
      }
    ]
  });
  console.log(response);

  const message = response.content[0];
  console.log(message);
}

main();
