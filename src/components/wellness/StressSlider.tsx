/**
 * StressSlider — Reusable presentation component
 *
 * Props:
 *  - value: current stress level (0-10)
 *  - max: maximum value (default 10)
 *  - onChange: callback when stress changes
 *
 * Why reusable:
 *  - Generic slider for stress measurement
 *  - No business logic, no API calls, no state management
 *  - Can be used in daily check-in, wellness log, or therapy tracking
 */

interface StressSliderProps {
  value: number;
  max?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

function stressLabel(value: number, max: number): string {
  const ratio = value / max;
  if (ratio <= 0.2) return "Calm";
  if (ratio <= 0.4) return "Mild";
  if (ratio <= 0.6) return "Moderate";
  if (ratio <= 0.8) return "High";
  return "Overwhelmed";
}

function stressColor(value: number, max: number): string {
  const ratio = value / max;
  if (ratio <= 0.2) return "#A8D5BA";
  if (ratio <= 0.4) return "#CDB4DB";
  if (ratio <= 0.6) return "#F7E7A9";
  if (ratio <= 0.8) return "#D88FA8";
  return "#E8787A";
}

export default function StressSlider({ value, max = 10, onChange, disabled = false }: StressSliderProps) {
  const percent = (value / max) * 100;
  const label = stressLabel(value, max);
  const color = stressColor(value, max);

  return (
    <div className="w-full" aria-label="Stress level">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 20 }}>🧠</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Stress</span>
        </div>
        <span className="font-body font-bold" style={{ fontSize: 13, color }}>{label}</span>
      </div>

      {/* Value display */}
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-display text-lumi-text" style={{ fontSize: 28 }}>{value}</span>
        <span className="font-body text-lumi-muted" style={{ fontSize: 12 }}>/ {max}</span>
      </div>

      {/* Slider track */}
      <div className="relative mb-2">
        <div className="h-3 rounded-full overflow-hidden" style={{ background: `${color}25` }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${percent}%`, background: color }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          aria-label={`Stress level: ${value} out of ${max}`}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>

      {/* Scale labels */}
      <div className="flex justify-between">
        <span className="font-body text-lumi-muted" style={{ fontSize: 10 }}>Calm</span>
        <span className="font-body text-lumi-muted" style={{ fontSize: 10 }}>Overwhelmed</span>
      </div>
    </div>
  );
}
