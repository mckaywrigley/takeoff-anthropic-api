import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";

config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  const response = await anthropic.beta.tools.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "What is the weather like in San Francisco?" },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "<thinking>I need to use the get_weather, and the user wants SF, which is likely San Francisco, CA.</thinking>"
          },
          {
            type: "tool_use",
            id: "toolu_01A09q90qw90lq917835lq9",
            name: "get_weather",
            input: { location: "San Francisco, CA", unit: "celsius" }
          }
        ]
      },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            tool_use_id: "toolu_01A09q90qw90lq917835lq9",
            content: [{ type: "text", text: "15 degrees" }]
          }
        ]
      }
    ],
    tools: [
      {
        name: "get_weather",
        description: "Get the current weather in a given location",
        input_schema: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA"
            },
            unit: {
              type: "string",
              enum: ["celsius", "fahrenheit"],
              description: 'The unit of temperature, either "celsius" or "fahrenheit"'
            }
          },
          required: ["location"]
        }
      }
    ]
  });
  console.log(response);

  const message = response.content;
  console.log(message);
}

main();
