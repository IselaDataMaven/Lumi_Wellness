import type { MoodData } from "../../types/dashboard";

interface MoodCardProps {
  data: MoodData;
}

export default function MoodCard({ data }: MoodCardProps) {
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
          <span style={{ fontSize: 20 }}>💜</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Mood</span>
        </div>
        <span className="font-body font-semibold text-lumi-muted" style={{ fontSize: 12 }}>Today</span>
      </div>

      {/* Current mood */}
      <div className="flex items-center gap-3 mb-4">
        <span style={{ fontSize: 36 }}>{data.current.emoji}</span>
        <div>
          <p className="font-body font-bold text-lumi-text" style={{ fontSize: 16 }}>{data.current.label}</p>
          <p className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
            You're feeling {data.current.label.toLowerCase()} today
          </p>
        </div>
      </div>

      {/* Week mood track */}
      <div className="flex items-center justify-between">
        {data.weekHistory.map((entry, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span
              style={{
                fontSize: 18,
                opacity: i === data.weekHistory.length - 1 ? 1 : 0.6,
              }}
            >
              {entry.emoji}
            </span>
            <span className="font-body text-lumi-muted" style={{ fontSize: 9, fontWeight: 600 }}>
              {["M", "T", "W", "T", "F", "S", "S"][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
