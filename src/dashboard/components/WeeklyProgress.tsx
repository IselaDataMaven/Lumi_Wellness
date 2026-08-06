import type { WeeklyStats } from "../../types/dashboard";

interface WeeklyProgressProps {
  stats: WeeklyStats;
}

export default function WeeklyProgress({ stats }: WeeklyProgressProps) {
  const maxScore = 100;

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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 20 }}>📊</span>
          <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Weekly Progress</span>
        </div>
        <span className="font-body font-bold text-lumi-rose" style={{ fontSize: 13 }}>
          Avg {stats.averageScore}%
        </span>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2" style={{ height: 80 }}>
        {stats.days.map((day) => {
          const barH = (day.score / maxScore) * 68;
          return (
            <div key={day.day} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className="w-full rounded-lg transition-all duration-500"
                style={{
                  height: barH,
                  background: day.isToday
                    ? "linear-gradient(180deg, #D88FA8, #CDB4DB)"
                    : "rgba(216,143,168,0.18)",
                  minHeight: 6,
                }}
              />
              <span
                className="font-body"
                style={{
                  fontSize: 10,
                  fontWeight: day.isToday ? 700 : 600,
                  color: day.isToday ? "#D88FA8" : "#7A7A7A",
                }}
              >
                {day.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: "1px solid rgba(216,143,168,0.08)" }}>
        <div>
          <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Goals completed</p>
          <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
            {stats.completedGoals}/{stats.totalGoals}
          </p>
        </div>
        <div
          className="h-2 flex-1 mx-4 rounded-full overflow-hidden"
          style={{ background: "rgba(216,143,168,0.12)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${(stats.completedGoals / stats.totalGoals) * 100}%`,
              background: "linear-gradient(to right, #D88FA8, #CDB4DB)",
              transition: "width 0.7s ease",
            }}
          />
        </div>
        <span className="font-body font-bold text-lumi-rose" style={{ fontSize: 12 }}>
          {Math.round((stats.completedGoals / stats.totalGoals) * 100)}%
        </span>
      </div>
    </div>
  );
}
