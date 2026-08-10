/**
 * SuggestionCard — Reusable presentation component
 *
 * Props:
 *  - suggestion: SuggestedPrompt object (id, title, prompt)
 *  - onClick: callback that receives the prompt string
 *
 * Why reusable:
 *  - Stateless clickable card for any suggestion/quick-action UI
 *  - No business logic, no API calls, no navigation
 *  - Can be used for chat prompts, exercise suggestions, or tip cards
 */

import type { SuggestedPrompt } from "../../types/ai";

interface SuggestionCardProps {
  suggestion: SuggestedPrompt;
  onClick: (prompt: string) => void;
}

export default function SuggestionCard({ suggestion, onClick }: SuggestionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(suggestion.prompt)}
      className="w-full text-left rounded-2xl p-3.5 transition-all duration-200 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose focus-visible:ring-offset-2"
      style={{
        background: "rgba(255,255,255,0.75)",
        border: "1.5px solid rgba(216,143,168,0.12)",
        boxShadow: "0 2px 12px rgba(216,143,168,0.05)",
      }}
      aria-label={`Suggested prompt: ${suggestion.title}`}
    >
      <div className="flex items-center gap-3">
        {/* Icon placeholder */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(205,180,219,0.15)" }}
        >
          <span style={{ fontSize: 16 }}>💬</span>
        </div>

        {/* Title */}
        <span className="font-body font-semibold text-lumi-text" style={{ fontSize: 14 }}>
          {suggestion.title}
        </span>
      </div>
    </button>
  );
}
