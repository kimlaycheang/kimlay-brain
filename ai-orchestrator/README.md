# Kim Orchestrator

A Telegram bot that routes messages to NVIDIA NIM-hosted LLMs based on command
prefixes or keywords, with automatic fallback on rate limits (429).

## Files

- `orchestrator.js` — Telegram polling loop, auth check, command parsing, logging.
- `nim-client.js` — OpenAI-SDK wrapper pointed at the NVIDIA NIM endpoint, with
  fallback-on-429 logic.
- `models.json` — routing table, display names, fallback map, and keyword lists.
  Edit this file to swap models without touching code.
- `.env.example` — copy to `.env` and fill in credentials.
- `install.sh` — installs deps and starts the bot under PM2.

## Routing

| Trigger              | Model                                          |
|----------------------|------------------------------------------------|
| `/plan`, "plan/strategy" keywords | `nvidia/nemotron-3-ultra-550b-a55b` |
| `/code`, "code/dev" keywords      | `deepseek-ai/deepseek-v4-flash`     |
| `/content`, general text          | `z-ai/glm-5.1`                       |
| `/vision`, "image/video" keywords | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` |
| `/audit`                           | Replies "🔴 Audit task — Claude review needed" (no model called) |

Free text with no command and no keyword match falls back to `z-ai/glm-5.1`
(the general/content model).

## Fallbacks (on HTTP 429)

- `z-ai/glm-5.1` → `minimaxai/minimax-m2.7`
- `deepseek-ai/deepseek-v4-flash` → `deepseek-ai/deepseek-v4-pro`

## Security

Only messages from `TELEGRAM_CHAT_ID` (set in `.env`) are processed. All other
chats are silently ignored (logged to console only).

## Setup

```bash
cp .env.example .env
# edit .env with your TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, NVIDIA_API_KEY
./install.sh
```

## Logging

Every request is appended as a JSON line to `requests.log`:
`timestamp`, `command`, `requestedModel`, `modelUsed`, `responseTimeMs`
(and `error` if the request failed).

## Operations

- View logs: `pm2 logs kim-orchestrator`
- Restart: `pm2 restart kim-orchestrator`
- Stop: `pm2 stop kim-orchestrator`

## Project Charter

No destructive actions (file deletion, service restarts on other systems,
infra changes) are taken by the bot itself — it only relays LLM responses to
Telegram. Any such action requires Kim's explicit approval out-of-band.
