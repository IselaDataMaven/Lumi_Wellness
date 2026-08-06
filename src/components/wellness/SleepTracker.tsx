/**
 * SleepTracker — Reusable presentation component
 *
 * Props:
 *  - hours: hours slept
 *  - minutes: minutes slept
 *  - quality: sleep quality rating
 *  - goal: target hours
 *  - onHoursChange: callback when hours adjust
 *  - onMinutesChange: callback when minutes adjust
 *
 * Why reusable:
 *  - Purely visual display + adjustment controls
 *  - No API calls, no state management, no fetching
 *  - Can be placed in check-in pages, dashboard cards, or settings
 */

interface SleepTrackerProps {
  hours: number;
  minutes: number;
  quality: "poor" | "fair" | "good" | "excellent";
  goal: number;
  onHoursChange: (hours: number) => void;
  onMinutesChange: (minutes: number) => void;
  disabled?: boolean;
}

const qualityColors: Record<string, string> = {
  poor: "#E8787A",
  fair: "#F7E7A9",
  good: "#A8D5BA",
  excellent: "#CDB4DB",
};

export default function SleepTracker({
  hours,
  minutes,
  quality,
  goal,
  onHoursChange,
  onMinutesChange,
  disabled = false,
}: SleepTrackerProps) {
  const totalHours = hours + minutes / 60;
  const percent = Math.min((totalHours / goal) * 100, 100);
  const color = qualityColors[quality];

  return (
    <div className="w-full" aria-label="Sleep tracker">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 20 }}>🌙</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Sleep</span>
        </div>
        <span
          className="px-2.5 py-1 rounded-xl font-body font-bold capitalize"
          style={{ fontSize: 11, background: `${color}20`, color }}
        >
          {quality}
        </span>
      </div>

      {/* Display */}
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-display text-lumi-text" style={{ fontSize: 28 }}>
          {hours}h {minutes}m
        </span>
        <span className="font-body text-lumi-muted" style={{ fontSize: 12 }}>/ {goal}h goal</span>
      </div>

      {/* Progress bar */}
      <div className="h-2.5 rounded-full overflow-hidden mb-4" style={{ background: `${color}20` }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>

      {/* Adjustment controls */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block font-body text-lumi-muted font-semibold mb-1" style={{ fontSize: 11 }}>
            Hours
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onHoursChange(Math.max(0, hours - 1))}
              disabled={disabled || hours <= 0}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lumi-rose transition-colors hover:bg-lumi-rose-pale disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
              style={{ background: "rgba(216,143,168,0.08)", fontSize: 16 }}
              aria-label="Decrease hours"
            >
              −
            </button>
            <span className="font-body font-bold text-lumi-text flex-1 text-center" style={{ fontSize: 16 }}>
              {hours}
            </span>
            <button
              type="button"
              onClick={() => onHoursChange(Math.min(16, hours + 1))}
              disabled={disabled || hours >= 16}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lumi-rose transition-colors hover:bg-lumi-rose-pale disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
              style={{ background: "rgba(216,143,168,0.08)", fontSize: 16 }}
              aria-label="Increase hours"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label className="block font-body text-lumi-muted font-semibold mb-1" style={{ fontSize: 11 }}>
            Minutes
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onMinutesChange(Math.max(0, minutes - 15))}
              disabled={disabled || minutes <= 0}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lumi-rose transition-colors hover:bg-lumi-rose-pale disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
              style={{ background: "rgba(216,143,168,0.08)", fontSize: 16 }}
              aria-label="Decrease minutes"
            >
              −
            </button>
            <span className="font-body font-bold text-lumi-text flex-1 text-center" style={{ fontSize: 16 }}>
              {minutes}
            </span>
            <button
              type="button"
              onClick={() => onMinutesChange(Math.min(45, minutes + 15))}
              disabled={disabled || minutes >= 45}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lumi-rose transition-colors hover:bg-lumi-rose-pale disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
              style={{ background: "rgba(216,143,168,0.08)", fontSize: 16 }}
              aria-label="Increase minutes"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
