import type { SleepData } from "../../types/dashboard";

interface SleepCardProps {
  data: SleepData;
}

const qualityColors: Record<string, string> = {
  poor: "#E8787A",
  fair: "#F7E7A9",
  good: "#A8D5BA",
  excellent: "#CDB4DB",
};

export default function SleepCard({ data }: SleepCardProps) {
  const percent = Math.min(((data.hours + data.minutes / 60) / data.goal) * 100, 100);
  const color = qualityColors[data.quality];

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
          <span style={{ fontSize: 20 }}>🌙</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Sleep</span>
        </div>
        <span
          className="px-2.5 py-1 rounded-xl font-body font-bold capitalize"
          style={{ fontSize: 11, background: `${color}20`, color }}
        >
          {data.quality}
        </span>
      </div>

      {/* Hours display */}
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-display text-lumi-text" style={{ fontSize: 32 }}>
          {data.hours}h {data.minutes}m
        </span>
        <span className="font-body text-lumi-muted" style={{ fontSize: 12 }}>/ {data.goal}h goal</span>
      </div>

      {/* Progress */}
      <div className="h-2.5 rounded-full overflow-hidden mb-3" style={{ background: `${color}20` }}>
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${percent}%`, background: color }} />
      </div>

      {/* Week mini chart */}
      <div className="flex items-end gap-1.5" style={{ height: 40 }}>
        {data.weekHistory.map((h, i) => {
          const barH = (h / data.goal) * 36;
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-md transition-all duration-500"
                style={{ height: barH, background: i === data.weekHistory.length - 1 ? color : `${color}40`, minHeight: 4 }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-1.5 mt-1">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="flex-1 text-center font-body text-lumi-muted" style={{ fontSize: 9, fontWeight: 600 }}>{d}</span>
        ))}
      </div>
    </div>
  );
}
