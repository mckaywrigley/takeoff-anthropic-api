# Takeoff: Anthropic API

This module is a guide to the Anthropic API.

## Resources

- [Takeoff](https://JoinTakeoff.com)
- [Anthropic Docs](https://docs.anthropic.com/claude/docs/intro-to-claude)
- [Anthropic API Reference](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)

## Recommendations

We recommend using [Cursor](https://cursor.sh/) to write code.

## Prerequisites

You will need an Anthropic API Key.

Get one [here](https://console.anthropic.com/settings/keys).

Copy the `.env.example` file to `.env`.

```bash
cp .env.example .env
```

In `.env`, fill in the API key.

```bash
ANTHROPIC_API_KEY=your-anthropic-api-key
```

## Install Packages

```bash
npm i
```

## Structure

The example code is in the `examples` folder.

Your code is in the `me` folder.

## Run Code

Install `tsx` to run the examples.

```bash
npm i -g tsx
```

Example: Run the `json-chat` file.

Copy the relative path of the file.

For the example code, run the following command:

```bash
tsx examples/json-chat.ts
```

For your code, run the following command:

```bash
tsx me/json-chat.ts
```
