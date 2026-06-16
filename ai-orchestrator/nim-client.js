const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

const models = JSON.parse(fs.readFileSync(path.join(__dirname, 'models.json'), 'utf8'));

const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: process.env.NVIDIA_BASE_URL || 'https://integrate.api.nvidia.com/v1',
});

function displayName(modelId) {
  return models.displayNames[modelId] || modelId;
}

function pickRoute(text, command) {
  const keywords = models.keywords;
  if (command === 'plan' || keywords.plan.some(k => text.toLowerCase().includes(k))) {
    return models.routes.plan;
  }
  if (command === 'code' || keywords.code.some(k => text.toLowerCase().includes(k))) {
    return models.routes.code;
  }
  if (command === 'vision' || keywords.vision.some(k => text.toLowerCase().includes(k))) {
    return models.routes.vision;
  }
  if (command === 'content') {
    return models.routes.content;
  }
  return models.routes.default;
}

async function chatComplete(modelId, messages) {
  const start = Date.now();
  try {
    const response = await client.chat.completions.create({
      model: modelId,
      messages,
    });
    const elapsedMs = Date.now() - start;
    const content = response.choices?.[0]?.message?.content || '';
    return { content, modelUsed: modelId, elapsedMs };
  } catch (err) {
    const status = err?.status || err?.response?.status;
    const fallback = models.fallbacks[modelId];
    if (status === 429 && fallback) {
      const elapsedMs = Date.now() - start;
      console.log(`[${new Date().toISOString()}] ${modelId} returned 429 (${elapsedMs}ms), falling back to ${fallback}`);
      return chatComplete(fallback, messages);
    }
    throw err;
  }
}

module.exports = { client, models, displayName, pickRoute, chatComplete };
