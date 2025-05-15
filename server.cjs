// 🪸 server.cjs — Express Server with OpenAI Streaming
// This file defines the backend logic for streaming GPT responses to the frontend chat UI
//
// ─────────────────────────────────────────────────────────────
// 🔗 BACKEND (owned by: backend dev)
// - Hosts /api/chat endpoint
// - Manages CORS and JSON middleware
// - Handles OpenAI streaming via EventStream
// ─────────────────────────────────────────────────────────────
// THIS IS A SAMPLE NOT THE BACKEND NORTHSTAR

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🌐 MIDDLEWARE — Enable JSON and CORS
app.use(cors());
app.use(express.json());

// 🔐 OPENAI CLIENT — Requires .env OPENAI_API_KEY
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 🧠 STREAMING ENDPOINT — POST /api/chat
// Expects: { messages: [{ role, content }, ...] }
// Responds: streamed chunks via text/event-stream
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const stream = await openai.chat.completions.create(
      {
        model: "gpt-4o",
        messages,
        stream: true,
      },
      { responseType: "stream" }
    );

    // 🕸 STREAM HEADERS — Setup Server-Sent Events (SSE)
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // 🌀 STREAM RESPONSE — Pipe chunks to frontend
    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(content); // 🔗 Send chunk to client
      }
    }

    res.end(); // ✅ Close the stream
  } catch (err) {
    console.error("Streaming error:", err);
    res.status(500).send("Streaming failed.");
  }
});

// 🚀 START SERVER
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
