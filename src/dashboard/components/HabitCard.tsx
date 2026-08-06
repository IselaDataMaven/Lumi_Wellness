import type { Habit } from "../../types/dashboard";

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
}

export default function HabitCard({ habit, onToggle }: HabitCardProps) {
  return (
    <button
      onClick={() => onToggle(habit.id)}
      className="flex items-center gap-3 w-full rounded-2xl p-3.5 transition-all duration-200 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
      style={{
        background: habit.completed ? `${habit.color}18` : "rgba(255,255,255,0.7)",
        border: `1.5px solid ${habit.completed ? `${habit.color}40` : "rgba(216,143,168,0.1)"}`,
      }}
      aria-label={`${habit.name}: ${habit.completed ? "completed" : "not completed"}`}
      aria-pressed={habit.completed}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${habit.color}20` }}
      >
        <span style={{ fontSize: 20 }}>{habit.icon}</span>
      </div>

      {/* Info */}
      <div className="flex-1 text-left">
        <p
          className="font-body font-semibold text-lumi-text"
          style={{ fontSize: 14, textDecoration: habit.completed ? "line-through" : "none", opacity: habit.completed ? 0.7 : 1 }}
        >
          {habit.name}
        </p>
        <p className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
          {habit.current}/{habit.target} {habit.unit}
        </p>
      </div>

      {/* Check */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
        style={{
          background: habit.completed ? habit.color : "transparent",
          border: `2px solid ${habit.completed ? habit.color : "rgba(216,143,168,0.25)"}`,
        }}
      >
        {habit.completed && (
          <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
            <path d="M2 6l3 3 5-5" />
          </svg>
        )}
      </div>
    </button>
  );
}
