/**
 * ChatBubble — Reusable presentation component
 *
 * Props:
 *  - message: ChatMessage object (id, role, content, timestamp)
 *
 * Why reusable:
 *  - Purely visual — renders a chat bubble based on role
 *  - No state, no API calls, no navigation, no business logic
 *  - Can be used in any chat-like UI (AI, support, community)
 */

import type { ChatMessage } from "../../types/ai";

interface ChatBubbleProps {
  message: ChatMessage;
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
      aria-label={`${isUser ? "You" : "Lumi"} said: ${message.content}`}
    >
      <div className={`max-w-[80%] sm:max-w-[70%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
        {/* Bubble */}
        <div
          className="rounded-3xl px-4 py-3"
          style={
            isUser
              ? {
                  background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
                  color: "white",
                  borderBottomRightRadius: 8,
                }
              : {
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(216,143,168,0.12)",
                  color: "#2D2D2D",
                  borderBottomLeftRadius: 8,
                  boxShadow: "0 2px 12px rgba(216,143,168,0.06)",
                }
          }
        >
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.55 }}>
            {message.content}
          </p>
        </div>

        {/* Timestamp */}
        <span
          className={`font-body text-lumi-muted mt-1 ${isUser ? "text-right" : "text-left"}`}
          style={{ fontSize: 10 }}
        >
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
