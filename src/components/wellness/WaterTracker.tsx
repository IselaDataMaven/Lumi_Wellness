/**
 * WaterTracker — Reusable presentation component
 *
 * Props:
 *  - current: glasses consumed today
 *  - goal: target glasses
 *  - onAdd: callback when user adds a glass
 *  - onRemove: callback when user removes a glass
 *
 * Why reusable:
 *  - Controlled by parent — just renders current state and emits changes
 *  - No data fetching, no state, no API calls
 *  - Can be embedded in check-in, dashboard, or widget contexts
 */

interface WaterTrackerProps {
  current: number;
  goal: number;
  onAdd: () => void;
  onRemove: () => void;
  disabled?: boolean;
}

export default function WaterTracker({ current, goal, onAdd, onRemove, disabled = false }: WaterTrackerProps) {
  const percent = Math.min((current / goal) * 100, 100);
  const isComplete = current >= goal;

  return (
    <div className="w-full" aria-label="Water intake tracker">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 20 }}>💧</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Water</span>
        </div>
        <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
          {current}/{goal} glasses
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-3 rounded-full overflow-hidden mb-4" style={{ background: "rgba(168,213,186,0.2)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%`, background: "linear-gradient(to right, #A8D5BA, #CDB4DB)" }}
        />
      </div>

      {/* Glass indicators */}
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: goal }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: 28,
              height: 28,
              background: i < current ? "rgba(168,213,186,0.25)" : "rgba(216,143,168,0.06)",
              border: `1.5px solid ${i < current ? "#A8D5BA" : "rgba(216,143,168,0.1)"}`,
            }}
            aria-hidden="true"
          >
            <span style={{ fontSize: 12, opacity: i < current ? 1 : 0.3 }}>💧</span>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled || current <= 0}
          className="flex-1 h-11 rounded-2xl font-body font-bold transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
          style={{
            background: "rgba(216,143,168,0.08)",
            color: "#D88FA8",
            border: "1.5px solid rgba(216,143,168,0.15)",
            fontSize: 14,
          }}
          aria-label="Remove one glass"
        >
          − Remove
        </button>
        <button
          type="button"
          onClick={onAdd}
          disabled={disabled || isComplete}
          className="flex-1 h-11 rounded-2xl font-body font-bold text-white transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-mint"
          style={{
            background: isComplete ? "rgba(168,213,186,0.4)" : "linear-gradient(135deg, #A8D5BA, #CDB4DB)",
            fontSize: 14,
          }}
          aria-label="Add one glass"
        >
          {isComplete ? "Done! 🎉" : "+ Add"}
        </button>
      </div>
    </div>
  );
}
