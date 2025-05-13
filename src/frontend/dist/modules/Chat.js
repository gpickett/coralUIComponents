import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import { Body1, Button, Tag, Tooltip as FluentTooltip, } from "@fluentui/react-components";
import { Copy, Send } from "../imports/bundleicons";
import { HeartRegular } from "@fluentui/react-icons";
import "./Chat.css";
import "./prism-material-oceanic.css";
const Chat = ({ userId, onSendMessage, onSaveMessage, onLoadHistory, onClearHistory, }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [inputHeight, setInputHeight] = useState(0);
    const textareaRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const inputContainerRef = useRef(null);
    useEffect(() => {
        if (onLoadHistory) {
            onLoadHistory(userId)
                .then((history) => {
                if (history)
                    setMessages(history);
            })
                .catch(() => {
                console.error("Failed to load chat history.");
            });
        }
    }, [onLoadHistory, userId]);
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            setShowScrollButton(false);
        }
    }, [messages]);
    useEffect(() => {
        const container = messagesContainerRef.current;
        if (!container)
            return;
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            setShowScrollButton(scrollTop + clientHeight < scrollHeight - 100);
        };
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (inputContainerRef.current) {
            setInputHeight(inputContainerRef.current.offsetHeight);
        }
    }, [input, isFocused]);
    const scrollToBottom = () => {
        messagesContainerRef.current?.scrollTo({
            top: messagesContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
        setShowScrollButton(false);
    };
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).catch((err) => {
            console.error("Failed to copy text:", err);
        });
    };
    const sendMessage = async () => {
        if (!input.trim())
            return;
        const updatedMessages = [...messages, { role: "user", content: input }];
        setMessages(updatedMessages);
        setInput("");
        setIsTyping(true);
        textareaRef.current && (textareaRef.current.style.height = "auto");
        try {
            if (onSendMessage) {
                const assistantResponse = await onSendMessage(input, updatedMessages);
                const newHistory = [...updatedMessages, { role: "assistant", content: assistantResponse }];
                setMessages(newHistory);
                onSaveMessage?.(userId, newHistory);
            }
            else {
                setMessages([
                    ...updatedMessages,
                    { role: "assistant", content: "🤖 No backend connected yet." },
                ]);
            }
        }
        catch (err) {
            console.error("Send Message Error:", err);
            setMessages([
                ...updatedMessages,
                { role: "assistant", content: "Oops! Something went wrong sending your message." },
            ]);
        }
        finally {
            setIsTyping(false);
        }
    };
    const clearChat = () => {
        setMessages([]);
        onClearHistory?.(userId);
    };
    return (_jsxs("div", { className: "chat-container", children: [_jsx("div", { className: "messages", ref: messagesContainerRef, style: {
                    flex: 1,
                    overflowY: "auto",
                    minHeight: 0,
                }, children: messages.map((msg, index) => (_jsx("div", { className: `message ${msg.role}`, children: _jsx(Body1, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", whiteSpace: "pre-wrap", width: "100%" }, children: [_jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism], children: msg.content }), msg.role === "assistant" && (_jsx("div", { className: "assistant-footer", children: _jsxs("div", { className: "assistant-actions", children: [_jsx(Button, { onClick: () => handleCopy(msg.content), title: "Copy Response", appearance: "subtle", style: { height: 28, width: 28 }, icon: _jsx(Copy, {}) }), _jsx(Button, { onClick: () => console.log("Heart clicked for response:", msg.content), title: "Like", appearance: "subtle", style: { height: 28, width: 28 }, icon: _jsx(HeartRegular, {}) })] }) }))] }) }) }, index))) }), showScrollButton && (_jsx(Tag, { onClick: scrollToBottom, className: "scroll-to-bottom", shape: "circular", style: {
                    bottom: inputHeight,
                    backgroundColor: "var(--colorNeutralBackgroundAlpha2)",
                    backdropFilter: "saturate(180%) blur(16px)",
                }, children: "Back to bottom" })), _jsxs("div", { className: `input-wrapper ${isFocused ? "focused" : ""}`, ref: inputContainerRef, children: [_jsx("textarea", { ref: textareaRef, value: input, onChange: (e) => {
                            setInput(e.target.value);
                            if (textareaRef.current) {
                                textareaRef.current.style.height = "auto";
                                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                            }
                        }, onKeyDown: (e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), placeholder: "Type a message...", rows: 1, className: "input-field" }), _jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [_jsx(FluentTooltip, { content: "AI-generated content may be incorrect.", relationship: "label", children: _jsx(Tag, { appearance: "filled", size: "small", children: "AI Generated" }) }), _jsx(Button, { appearance: "transparent", onClick: sendMessage, icon: _jsx(Send, {}) })] }), _jsx("span", { className: "focus-indicator" })] }), onClearHistory && (_jsx("button", { onClick: clearChat, children: "Clear Chat" }))] }));
};
export default Chat;
