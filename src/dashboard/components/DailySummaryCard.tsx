import type { ExerciseData, NutritionData, DailyGoal } from "../../types/dashboard";

interface DailySummaryCardProps {
  exercise: ExerciseData;
  nutrition: NutritionData;
  goals: DailyGoal[];
}

export default function DailySummaryCard({ exercise, nutrition, goals }: DailySummaryCardProps) {
  const completedGoals = goals.filter((g) => g.completed).length;
  const exercisePercent = Math.min((exercise.minutesToday / exercise.goal) * 100, 100);
  const caloriePercent = Math.min((nutrition.calories / nutrition.caloriesGoal) * 100, 100);

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
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {/* Exercise */}
        <div className="flex flex-col items-center gap-1.5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(168,213,186,0.15)" }}
          >
            <span style={{ fontSize: 20 }}>🏃</span>
          </div>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
            {exercise.minutesToday}m
          </span>
          <span className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Exercise</span>
        </div>

        {/* Calories */}
        <div className="flex flex-col items-center gap-1.5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(247,231,169,0.2)" }}
          >
            <span style={{ fontSize: 20 }}>🔥</span>
          </div>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
            {exercise.caloriesBurned}
          </span>
          <span className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Calories</span>
        </div>

        {/* Goals */}
        <div className="flex flex-col items-center gap-1.5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(205,180,219,0.15)" }}
          >
            <span style={{ fontSize: 20 }}>✅</span>
          </div>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
            {completedGoals}/{goals.length}
          </span>
          <span className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Goals</span>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-3">
        <ProgressBar label="Exercise" value={exercisePercent} color="#A8D5BA" />
        <ProgressBar label="Calories" value={caloriePercent} color="#F7E7A9" />
      </div>
    </div>
  );
}

function ProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-body text-lumi-muted font-semibold" style={{ fontSize: 11 }}>{label}</span>
        <span className="font-body text-lumi-text font-bold" style={{ fontSize: 11 }}>{Math.round(value)}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: `${color}30` }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}
