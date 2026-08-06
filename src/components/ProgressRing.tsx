interface ProgressRingProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  sublabel?: string;
  animate?: boolean;
}

export default function ProgressRing({
  value,
  max = 100,
  size = 120,
  strokeWidth = 10,
  color = "#D88FA8",
  trackColor = "rgba(216,143,168,0.15)",
  label,
  sublabel,
  animate = true,
}: ProgressRingProps) {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = circumference * (1 - pct);
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={animate ? "progress-ring-circle" : ""}
          style={{
            transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>
      {(label || sublabel) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {label && (
            <span
              className="font-display text-lumi-text leading-none"
              style={{ fontSize: size * 0.22 }}
            >
              {label}
            </span>
          )}
          {sublabel && (
            <span
              className="font-body text-lumi-muted text-center leading-tight"
              style={{ fontSize: size * 0.11, maxWidth: size * 0.6 }}
            >
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
