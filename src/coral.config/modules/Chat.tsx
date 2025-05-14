// 🪸 ChatShell — Frontend Chat UI with Backend Plugin Hooks
// This component is split into two clearly defined roles:
//
// ─────────────────────────────────────────────────────────────
// 💄 FRONTEND (owned by: designer/dev)
// - UI layout and rendering
// - Input control and scroll behavior
// - Message history display
//
// 🔗 BACKEND (owned by: backend dev)
// - Message submission (`onSendMessage`)
// - History persistence (`onSaveMessage`, `onLoadHistory`, `onClearHistory`)
// ─────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import {
  Body1,
  Button,
  Tag,
  Tooltip as FluentTooltip,
  ToolbarDivider,
  Caption1,
} from "@fluentui/react-components";
import { Copy, Send } from "../imports/bundleicons";
import { AppFolder20Regular, Attach20Regular, HeartRegular } from "@fluentui/react-icons";
import "./Chat.css";
import "./prism-material-oceanic.css";
import HeaderTools from "../components/Header/HeaderTools";

// 💬 Message Type
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// 🔌 PROPS CONTRACT (Frontend-Backend Integration)
interface ChatShellProps {
  userId: string;

  // 🔗 BACKEND DEV: Required
  // Sends input + history to backend (OpenAI, Azure, Claude, etc.)
  onSendMessage: (input: string, history: ChatMessage[]) => Promise<string>;

  // 🔗 BACKEND DEV: Optional
  // Persists chat state (localStorage, database, etc.)
  onSaveMessage?: (userId: string, messages: ChatMessage[]) => void;
  onLoadHistory?: (userId: string) => Promise<ChatMessage[]>;
  onClearHistory?: (userId: string) => void;

    // FRONTEND
    placeholder?: string;
    children?: React.ReactNode; // for custom tools
}

const ChatShell: React.FC<ChatShellProps> = ({
  userId,
  onSendMessage,
  onSaveMessage,
  onLoadHistory,
  onClearHistory,
  placeholder,
  children
}) => {
  // 🧠 STATE — Owned by Frontend
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  // 🔄 LIFECYCLE: Load Message History — Backend Owned
  useEffect(() => {
    onLoadHistory?.(userId)
      .then((history) => {
        if (history) setMessages(history);
      })
      .catch(() => console.error("Failed to load chat history."));
  }, [onLoadHistory, userId]);

  // 🌀 UI: Auto-scroll on new message
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
      setShowScrollButton(false);
    }
  }, [messages]);

  // 🧭 UI: Show scroll button if scrolled away
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowScrollButton(scrollTop + clientHeight < scrollHeight - 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // 📏 UI: Track input height for padding
  useEffect(() => {
    if (inputContainerRef.current) {
      setInputHeight(inputContainerRef.current.offsetHeight);
    }
  }, [input, isFocused]);

  // 📩 SEND MESSAGE — Backend Required
  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);
    textareaRef.current && (textareaRef.current.style.height = "auto");

    try {
      const assistantResponse = await onSendMessage(input, updatedMessages);
      const newHistory = [...updatedMessages, { role: "assistant", content: assistantResponse }];
      setMessages(newHistory);

      // 🔗 BACKEND HOOK (optional)
      onSaveMessage?.(userId, newHistory);
    } catch (err) {
      console.error("Send Message Error:", err);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Oops! Something went wrong sending your message." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // 🧽 CLEAR HISTORY — Backend Optional
  const clearChat = () => {
    setMessages([]);
    onClearHistory?.(userId);
  };

  // 📋 COPY FUNCTION — Frontend Owned
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy text:", err);
    });
  };

  // 🎯 UI: Scroll back to bottom
  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
    setShowScrollButton(false);
  };

  return (
    <div className="chat-container">
      {/* 💬 MESSAGES UI — Frontend Controlled */}
      <div className="messages" ref={messagesContainerRef} style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <Body1>
              <div style={{ display: "flex", flexDirection: "column", whiteSpace: "pre-wrap", width: "100%" }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypePrism]}>
                  {msg.content}
                </ReactMarkdown>
                {msg.role === "assistant" && (
                  <div className="assistant-footer">
                    <div className="assistant-actions">
                      <Button
                        onClick={() => handleCopy(msg.content)}
                        title="Copy Response"
                        appearance="subtle"
                        style={{ height: 28, width: 28 }}
                        icon={<Copy />}
                      />
                      <Button
                        onClick={() => console.log("Heart clicked for response:", msg.content)}
                        title="Like"
                        appearance="subtle"
                        style={{ height: 28, width: 28 }}
                        icon={<HeartRegular />}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Body1>
          </div>
        ))}
      </div>

      {/* 🔽 SCROLL BUTTON — Frontend UI */}
      {showScrollButton && (
        <Tag
          onClick={scrollToBottom}
          className="scroll-to-bottom"
          shape="circular"
          style={{
            bottom: inputHeight,
            backgroundColor: "transparent",
            backdropFilter: "saturate(180%) blur(16px)",
            color: "var(--colorNeutralForeground2)",
            border: "1px solid var(--colorNeutralStroke1)"
          }}
        >
          Back to bottom
        </Tag>
      )}

      {/* 🎙 INPUT FIELD — Frontend Controlled */}
      <div className={`input-wrapper ${isFocused ? "focused" : ""}`} ref={inputContainerRef}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (textareaRef.current) {
              textareaRef.current.style.height = "auto";
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || "Type a message..."}

          rows={1}
          className="input-field"
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxHeight:'32px'}}>
          <FluentTooltip content="AI-generated content may be incorrect." relationship="label">
            <Tag appearance="filled" size="small">AI Generated</Tag>
          </FluentTooltip>
          <HeaderTools>
  <Button appearance="transparent" onClick={sendMessage} icon={<Send />} />
  {children && <ToolbarDivider />}
  {children}
</HeaderTools>


        </div>
        <span className="focus-indicator" />
      </div>
      <Caption1 style={{color:'var(--colorNeutralForeground3', marginTop:'-8px', paddingBottom:'6px', textAlign:'center'}}>AI-Generated content may be incorrect</Caption1>
      {/* 🧼 CLEAR CHAT BUTTON — Backend Optional */}
      {onClearHistory && (
        <button onClick={clearChat}>Clear Chat</button>
      )}
    </div>
  );
};

export default ChatShell;
