import React from "react";
import "./Chat.css";
import "./prism-material-oceanic.css";
interface ChatProps {
    userId: string;
    onSendMessage?: (input: string, history: {
        role: string;
        content: string;
    }[]) => Promise<string>;
    onSaveMessage?: (userId: string, messages: {
        role: string;
        content: string;
    }[]) => void;
    onLoadHistory?: (userId: string) => Promise<{
        role: string;
        content: string;
    }[]>;
    onClearHistory?: (userId: string) => void;
}
declare const Chat: React.FC<ChatProps>;
export default Chat;
