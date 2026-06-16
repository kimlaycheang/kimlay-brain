require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const { models, displayName, pickRoute, chatComplete } = require('./nim-client');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ALLOWED_CHAT_ID = String(process.env.TELEGRAM_CHAT_ID);

if (!TOKEN || !process.env.NVIDIA_API_KEY) {
  console.error('Missing required environment variables. Check .env file.');
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });
const LOG_FILE = path.join(__dirname, 'requests.log');

function logRequest(entry) {
  const line = JSON.stringify(entry) + '\n';
  fs.appendFile(LOG_FILE, line, err => {
    if (err) console.error('Failed to write log:', err);
  });
}

function parseCommand(text) {
  const match = text.match(/^\/(plan|code|content|vision|audit)\b\s*(.*)$/is);
  if (!match) return { command: null, prompt: text };
  return { command: match[1].toLowerCase(), prompt: match[2].trim() || text };
}

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (String(chatId) !== ALLOWED_CHAT_ID) {
    console.log(`[${new Date().toISOString()}] Ignored message from unauthorized chat ${chatId}`);
    return;
  }

  if (!text) return;

  const { command, prompt } = parseCommand(text);

  if (command === 'audit') {
    await bot.sendMessage(chatId, '🔴 Audit task — Claude review needed');
    return;
  }

  const modelId = pickRoute(prompt, command);
  const start = Date.now();

  try {
    const { content, modelUsed, elapsedMs } = await chatComplete(modelId, [
      { role: 'user', content: prompt },
    ]);

    const reply = `[${displayName(modelUsed)}]\n${content}`;
    await bot.sendMessage(chatId, reply);

    logRequest({
      timestamp: new Date().toISOString(),
      command: command || 'auto',
      requestedModel: modelId,
      modelUsed,
      responseTimeMs: elapsedMs,
    });
  } catch (err) {
    console.error('Error handling message:', err);
    await bot.sendMessage(chatId, `⚠️ Error: ${err.message || 'request failed'}`);
    logRequest({
      timestamp: new Date().toISOString(),
      command: command || 'auto',
      requestedModel: modelId,
      modelUsed: null,
      responseTimeMs: Date.now() - start,
      error: err.message,
    });
  }
});

console.log('AI Orchestrator bot started. Listening for messages...');
