/**
 * ChatInput — Reusable presentation component
 *
 * Props:
 *  - value: current text content (controlled)
 *  - onChange: callback when text changes
 *  - onSend: callback when user submits the message
 *  - loading: disables send while processing
 *  - placeholder: input placeholder text
 *
 * Why reusable:
 *  - Controlled textarea with no internal state
 *  - Keyboard behavior (Enter sends, Shift+Enter newline)
 *  - No API calls, no navigation, no business logic
 *  - Can be used in any messaging, comment, or input context
 */

interface ChatInputProps {
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
  loading?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  loading = false,
  placeholder = "Type a message...",
}: ChatInputProps) {
  const canSend = value.trim().length > 0 && !loading;

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canSend) onSend();
    }
  }

  return (
    <div
      className="flex items-end gap-2 p-3 rounded-3xl"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1.5px solid rgba(216,143,168,0.12)",
        boxShadow: "0 -2px 16px rgba(216,143,168,0.06)",
      }}
    >
      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={loading}
        rows={1}
        className="flex-1 resize-none font-body text-lumi-text placeholder:text-lumi-muted/60 bg-transparent focus:outline-none disabled:opacity-50"
        style={{ fontSize: 15, lineHeight: 1.4, maxHeight: 120, minHeight: 24 }}
        aria-label="Message input"
      />

      {/* Send button */}
      <button
        type="button"
        onClick={onSend}
        disabled={!canSend}
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
        style={{
          background: canSend
            ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
            : "rgba(216,143,168,0.15)",
        }}
        aria-label="Send message"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke={canSend ? "white" : "#7A7A7A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
          >
            <path d="M18 2L9 11" />
            <path d="M18 2l-6 16-3-7-7-3 16-6z" />
          </svg>
        )}
      </button>
    </div>
  );
}
