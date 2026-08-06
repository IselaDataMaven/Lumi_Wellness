interface ProgressDotsProps {
  total: number;
  current: number;
  className?: string;
}

/**
 * Dot indicators for multi-step flows (onboarding, setup).
 * Active dot is wider with gradient fill.
 */
export default function ProgressDots({
  total,
  current,
  className = "",
}: ProgressDotsProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      role="tablist"
      aria-label={`Step ${current + 1} of ${total}`}
    >
      {Array.from({ length: total }, (_, i) => {
        const isActive = i === current;
        return (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: isActive ? 24 : 8,
              height: 8,
              background: isActive
                ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                : "rgba(216,143,168,0.25)",
            }}
            role="tab"
            aria-selected={isActive}
            aria-label={`Step ${i + 1}`}
          />
        );
      })}
    </div>
  );
}
