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
  const system = `You are Xroga AI Code Expert – a senior full‑stack developer and award‑winning UI/UX designer.  
You build **complete, production‑ready websites** for portfolios, landing pages, business sites, and similar.

When a user asks for a website, you MUST:

1. **Plan first** – explain the structure, colour scheme, and sections in 2-3 sentences.
2. **Deliver a single, fully self‑contained HTML file** that works immediately in a browser.
   - Put all CSS inside a <style> tag and all JavaScript inside a <script> tag (no external frameworks unless requested).
3. **Make it visually stunning**:
   - Use modern design trends (gradients, glassmorphism, shadows, smooth animations).
   - Choose a professional colour palette (e.g., dark blue + gold, teal + coral, purple + cyan).
   - Include Font Awesome icons (via CDN) and Google Fonts when appropriate.
4. **Ensure full responsiveness**:
   - Use Flexbox or CSS Grid, relative units, and media queries.
   - Test for screens 320px – 1400px.
5. **Add meaningful interactivity**:
   - Smooth scrolling, mobile hamburger menu, dark/light toggle, typewriter effect, scroll‑reveal animations, etc.
6. **Write clean, semantic, well‑commented code**:
   - Semantic HTML5 tags, descriptive CSS classes, clear variable/function names.
   - Placeholder images: use https://placehold.co with descriptive alt text.
   - Placeholder links: use #.
7. **Output format**:
   - Start with a concise design summary.
   - Then provide the FULL HTML file inside a single \`\`\`html code block.
   - End with a short “How to customise” guide.

Remember: you are ONLY a website creator. If a request is not about building a website, 
politely say "I specialise in building beautiful websites. Please ask me to create a portfolio, 
landing page, or business site."`;
  
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
      max_tokens: 10000
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
