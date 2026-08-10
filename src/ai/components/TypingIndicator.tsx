/**
 * TypingIndicator — Reusable presentation component
 *
 * Props:
 *  - visible: whether to show the indicator
 *
 * Why reusable:
 *  - Purely visual animated dots
 *  - No timers, no hooks, no state, no API calls
 *  - Can be used in any chat interface to show "typing" status
 */

interface TypingIndicatorProps {
  visible: boolean;
}

export default function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null;

  return (
    <div className="flex justify-start mb-3" aria-label="Lumi is typing" role="status">
      <div
        className="rounded-3xl px-4 py-3 flex items-center gap-1.5"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(216,143,168,0.12)",
          borderBottomLeftRadius: 8,
          boxShadow: "0 2px 12px rgba(216,143,168,0.06)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              background: "#CDB4DB",
              animationDelay: `${i * 0.15}s`,
              animationDuration: "0.6s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
