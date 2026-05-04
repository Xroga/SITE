// functions/api/ai.js
export async function onRequest(context) {
  const { request, env } = context;

  // Only allow POST
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { prompt, mode, files = [] } = await request.json();

    if (!prompt || !mode) {
      return new Response(JSON.stringify({ error: 'Missing prompt or mode' }), { status: 400 });
    }

    let reply;

    if (mode === 'code-expert') {
      reply = await callDeepSeek(prompt, env.DEEPSEEK_API_KEY);
    } else if (mode === 'lightening') {
      reply = await callGemini(prompt, 'gemini-1.5-flash', env.GEMINI_API_KEY, files);
    } else if (mode === 'deep-thought') {
      reply = await callGemini(prompt, 'gemini-1.5-pro', env.GEMINI_API_KEY, files);
    } else {
      // fallback
      reply = await callGemini(prompt, 'gemini-1.5-flash', env.GEMINI_API_KEY, files);
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// ---------- DeepSeek helper ----------
async function callDeepSeek(prompt, apiKey) {
  const system = "You are Xroga AI Code Expert. Provide clean, working code with brief explanations. Format code blocks with proper language tags. Be concise but helpful.";
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2048
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || 'DeepSeek API error');
  return data.choices[0].message.content;
}

// ---------- Gemini helper (works for both flash & pro) ----------
async function callGemini(prompt, model, apiKey, files) {
  let fileCtx = '';
  if (files && files.length > 0) {
    fileCtx = `\nThe user attached ${files.length} file(s). Acknowledge you received them.\n`;
  }
  const system = getSystemPrompt(modeFromModel(model));
  const fullPrompt = system + fileCtx + '\n\nUser: ' + prompt + '\n\nXroga AI:';

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048, topP: 0.95 }
    })
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.error?.message || 'Gemini API error');
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
}

function getSystemPrompt(mode) {
  if (mode === 'code-expert')
    return "You are Xroga AI Code Expert. Provide clean, working code with brief explanations. Format code blocks with proper language tags. Be concise but helpful.";
  if (mode === 'lightening')
    return "You are Xroga AI Lightning+Creative mode. Give fast, imaginative, and engaging responses. Be enthusiastic and use emojis occasionally.";
  return "You are Xroga AI Deep Thought mode. Provide thoughtful, analytical, and detailed answers. Break down complex topics step by step.";
}

function modeFromModel(model) {
  return model.includes('flash') ? 'lightening' : 'deep-thought';
}
