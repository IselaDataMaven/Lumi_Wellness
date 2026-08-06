import type { WaterData } from "../../types/dashboard";

interface WaterTrackerProps {
  data: WaterData;
  onAddWater: () => void;
}

export default function WaterTracker({ data, onAddWater }: WaterTrackerProps) {
  const percent = Math.min((data.current / data.goal) * 100, 100);

  return (
    <div
      className="rounded-3xl p-5"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "0 4px 24px rgba(216,143,168,0.1)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 20 }}>💧</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Water</span>
        </div>
        <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
          {data.current}/{data.goal} {data.unit}
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
        {Array.from({ length: data.goal }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: 28,
              height: 28,
              background: i < data.current ? "rgba(168,213,186,0.25)" : "rgba(216,143,168,0.06)",
              border: `1.5px solid ${i < data.current ? "#A8D5BA" : "rgba(216,143,168,0.1)"}`,
            }}
          >
            <span style={{ fontSize: 12, opacity: i < data.current ? 1 : 0.3 }}>💧</span>
          </div>
        ))}
      </div>

      {/* Add button */}
      <button
        onClick={onAddWater}
        disabled={data.current >= data.goal}
        className="w-full h-11 rounded-2xl font-body font-bold text-white transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-mint"
        style={{
          background: data.current >= data.goal
            ? "rgba(168,213,186,0.4)"
            : "linear-gradient(135deg, #A8D5BA, #CDB4DB)",
          fontSize: 14,
        }}
      >
        {data.current >= data.goal ? "Goal Reached! 🎉" : "+ Add Glass"}
      </button>
    </div>
  );
}
