# Shut Bot

A Discord bot that responds with aggressive "shut up" quotes when users start typing in channels. Uses Google's Gemini AI to generate unique quotes.

## Features

- Monitors typing events in Discord channels
- Generates AI-powered "shut up" quotes using Google Gemini
- Configurable response rate
- Invisible status to avoid detection

## Prerequisites

- Node.js (with Bun runtime)
- Discord Bot Token
- Google Gemini API Key

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

## Configuration

1. Copy `.env.example` to `.env`
2. Fill in the required environment variables:
   - `BOT_TOKEN`: Your Discord bot token
   - `GEMINI_TOKEN`: Your Google Gemini API key
   - `AI_MODEL`: Gemini model to use (e.g., "gemini-1.5-flash")
   - `SHUT_RATE`: Probability of responding (0-1, default 1)

## Usage

Run the bot:
```bash
bun run dev
```

The bot will log in and monitor typing events. When a user starts typing, it may respond with a generated quote based on the configured rate.

