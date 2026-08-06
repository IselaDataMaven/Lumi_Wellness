/**
 * MoodSelector — Reusable presentation component
 *
 * Props:
 *  - value: currently selected mood level (1-5)
 *  - onChange: callback when user selects a mood
 *
 * Why reusable:
 *  - No data fetching, no API calls, no navigation
 *  - Accepts value + onChange like a controlled input
 *  - Can be used in daily check-in, journal, or any mood-capture flow
 */

interface MoodOption {
  value: number;
  emoji: string;
  label: string;
}

interface MoodSelectorProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const moods: MoodOption[] = [
  { value: 1, emoji: "😔", label: "Rough" },
  { value: 2, emoji: "😕", label: "Low" },
  { value: 3, emoji: "😐", label: "Okay" },
  { value: 4, emoji: "🙂", label: "Good" },
  { value: 5, emoji: "😊", label: "Great" },
];

export default function MoodSelector({ value, onChange, disabled = false }: MoodSelectorProps) {
  return (
    <div className="w-full" role="radiogroup" aria-label="Select your mood">
      <div className="grid grid-cols-5 gap-2">
        {moods.map((mood) => {
          const isSelected = value === mood.value;
          return (
            <button
              key={mood.value}
              type="button"
              onClick={() => !disabled && onChange(mood.value)}
              disabled={disabled}
              className="flex flex-col items-center gap-1.5 rounded-2xl py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose focus-visible:ring-offset-2"
              style={{
                background: isSelected ? "rgba(216,143,168,0.15)" : "rgba(255,255,255,0.6)",
                border: `2px solid ${isSelected ? "#D88FA8" : "transparent"}`,
                transform: isSelected ? "scale(1.05)" : "scale(1)",
                boxShadow: isSelected ? "0 4px 16px rgba(216,143,168,0.2)" : "none",
                opacity: disabled ? 0.5 : 1,
              }}
              role="radio"
              aria-checked={isSelected}
              aria-label={`Mood: ${mood.label}`}
            >
              <span style={{ fontSize: 28 }}>{mood.emoji}</span>
              <span
                className="font-body font-semibold"
                style={{ fontSize: 11, color: isSelected ? "#D88FA8" : "#7A7A7A" }}
              >
                {mood.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
