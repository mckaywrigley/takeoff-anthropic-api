import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";

config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  const response = await anthropic.beta.tools.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    messages: [{ role: "user", content: "My name is John and I'm from California." }],
    tools: [
      {
        name: "form_values",
        description: "Extract values from a form into well-structured JSON.",
        input_schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The user's name"
            },
            state: {
              type: "string",
              description: "The state"
            }
          },
          required: ["name", "state"]
        }
      }
    ]
  });
  console.log(response);

  const message = response.content;
  console.log(message);
}

main();
