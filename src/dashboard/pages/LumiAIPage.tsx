import { useState, useEffect, useRef } from "react";
import { useLumiAI } from "../../hooks/useLumiAI";
import type { LumiContext } from "../../types/ai";
import ChatBubble from "../../ai/components/ChatBubble";
import ChatInput from "../../ai/components/ChatInput";
import SuggestionCard from "../../ai/components/SuggestionCard";
import TypingIndicator from "../../ai/components/TypingIndicator";

/**
 * Default context used when wellness data isn't available yet.
 * In future sprints this can be fed from useWellness/useLumi.
 */
const DEFAULT_CONTEXT: LumiContext = {
  mood: 3,
  energy: 5,
  stress: 4,
  water: 3,
  sleepHours: 7,
  lumiLevel: 2,
};

export default function LumiAIPage() {
  const { messages, suggestedPrompts, isLoading, isTyping, initialize, sendMessage } = useLumiAI(DEFAULT_CONTEXT);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize conversation on mount
  useEffect(() => {
    initialize();
  }, [initialize]);

  // Auto-scroll to bottom when messages change or typing starts
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    sendMessage(text);
  }

  function handleSuggestionClick(prompt: string) {
    setInput("");
    sendMessage(prompt);
  }

  // Loading state
  if (isLoading && messages.length === 0) {
    return (
      <div className="min-h-dvh flex items-center justify-center pb-24" style={{ background: "linear-gradient(180deg, #FFF8FA 0%, #F5EDF9 100%)" }}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-lumi-lavender/30 border-t-lumi-lavender rounded-full animate-spin" />
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>Lumi is waking up...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col min-h-dvh"
      style={{ background: "linear-gradient(180deg, #FFF8FA 0%, #F5EDF9 100%)" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-30 flex items-center justify-center px-5 py-4"
        style={{
          background: "rgba(255,248,250,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(216,143,168,0.08)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #D88FA8, #CDB4DB)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" width="16" height="16">
              <path d="M12 2a7 7 0 017 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 017-7z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </div>
          <div>
            <p className="font-body font-bold text-lumi-text" style={{ fontSize: 15 }}>Lumi AI</p>
            <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Your wellness companion</p>
          </div>
        </div>
      </header>

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-4"
        style={{ paddingBottom: 100 }}
      >
        {messages.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center text-center pt-16 gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "rgba(205,180,219,0.12)", border: "2px solid rgba(205,180,219,0.2)" }}
            >
              <span style={{ fontSize: 32 }}>🌸</span>
            </div>
            <p className="font-display text-lumi-text" style={{ fontSize: 20 }}>
              How can I help today?
            </p>
            <p className="font-body text-lumi-muted max-w-xs" style={{ fontSize: 14, lineHeight: 1.5 }}>
              I'm here to support your wellness journey. Ask me anything.
            </p>
          </div>
        ) : (
          /* Messages */
          <div className="max-w-lg mx-auto">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            <TypingIndicator visible={isTyping} />
          </div>
        )}

        {/* Suggested prompts — show below messages when conversation is short */}
        {suggestedPrompts.length > 0 && messages.length <= 2 && !isTyping && (
          <div className="max-w-lg mx-auto mt-6">
            <p className="font-body text-lumi-muted font-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.03em" }}>
              Suggestions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {suggestedPrompts.map((sp) => (
                <SuggestionCard key={sp.id} suggestion={sp} onClick={handleSuggestionClick} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky input */}
      <div
        className="sticky bottom-0 z-30 px-4 pb-5 pt-3"
        style={{
          background: "linear-gradient(to top, rgba(255,248,250,0.97) 60%, transparent)",
        }}
      >
        <div className="max-w-lg mx-auto">
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={handleSend}
            loading={isTyping}
            placeholder="Talk to Lumi..."
          />
        </div>
      </div>
    </div>
  );
}
