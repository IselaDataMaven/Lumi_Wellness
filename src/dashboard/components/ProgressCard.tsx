import type { ExerciseData } from "../../types/dashboard";

interface ProgressCardProps {
  exercise: ExerciseData;
}

export default function ProgressCard({ exercise }: ProgressCardProps) {
  const percent = Math.min((exercise.minutesToday / exercise.goal) * 100, 100);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

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
      <div className="flex items-center gap-2 mb-4">
        <span style={{ fontSize: 20 }}>🏋️</span>
        <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Exercise</span>
      </div>

      <div className="flex items-center gap-5">
        {/* Ring */}
        <div className="relative flex items-center justify-center" style={{ width: 90, height: 90 }}>
          <svg width="90" height="90" viewBox="0 0 90 90" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="45" cy="45" r={radius} fill="none" stroke="rgba(216,143,168,0.12)" strokeWidth="8" />
            <circle
              cx="45" cy="45" r={radius} fill="none"
              stroke="url(#exGrad)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.8s ease" }}
            />
            <defs>
              <linearGradient id="exGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D88FA8" />
                <stop offset="100%" stopColor="#A8D5BA" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-lumi-text" style={{ fontSize: 18 }}>{Math.round(percent)}%</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex-1 space-y-2">
          <div>
            <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Duration</p>
            <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>{exercise.minutesToday} / {exercise.goal} min</p>
          </div>
          <div>
            <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Sessions</p>
            <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>{exercise.sessionsCompleted} completed</p>
          </div>
          <div>
            <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Burned</p>
            <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>{exercise.caloriesBurned} kcal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
