import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../hooks/useDashboard";
import { useWellness } from "../../hooks/useWellness";
import { useLumi } from "../../hooks/useLumi";
import { buildDailyGreeting } from "../../services/dashboardService";
import type { WaterData, SleepData, MoodData } from "../../types/dashboard";
import { STAGE_LABELS, MOOD_EMOJIS, MOOD_LABELS } from "../../types/lumi";
import DashboardHeader from "../components/DashboardHeader";
import GreetingCard from "../components/GreetingCard";
import SectionTitle from "../components/SectionTitle";
import QuickActionButton from "../components/QuickActionButton";
import DailySummaryCard from "../components/DailySummaryCard";
import HabitCard from "../components/HabitCard";
import WaterTracker from "../components/WaterTracker";
import SleepCard from "../components/SleepCard";
import MoodCard from "../components/MoodCard";
import ProgressCard from "../components/ProgressCard";
import WeeklyProgress from "../components/WeeklyProgress";
import BottomNavigation from "../components/BottomNavigation";

const quickActions = [
  { icon: "🧘", label: "Meditate", color: "#CDB4DB", bgColor: "#F5EDF9", path: "/exercises?category=meditation" },
  { icon: "🌸", label: "Stretch", color: "#D88FA8", bgColor: "#FBF0F4", path: "/exercises?category=stretch" },
  { icon: "🌬️", label: "Breathe", color: "#A8D5BA", bgColor: "#EDF7F1", path: "/checkin" },
  { icon: "📝", label: "Journal", color: "#F7E7A9", bgColor: "#FBF3CE", path: "/journal" },
];

/** Map mood level (1–5) to emoji and label matching dashboard MoodEntry format. */
const MOOD_MAP: Record<number, { emoji: string; label: string }> = {
  1: { emoji: "😔", label: "Rough" },
  2: { emoji: "😕", label: "Low" },
  3: { emoji: "😐", label: "Okay" },
  4: { emoji: "🙂", label: "Good" },
  5: { emoji: "😊", label: "Great" },
};

export default function HomeDashboard() {
  const { data, isLoading, isRefreshing, toggleHabit, addWater, refresh } = useDashboard();
  const { checkIn } = useWellness();
  const { lumi } = useLumi();
  const navigate = useNavigate();

  if (isLoading || !data) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-lumi-gradient">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-lumi-rose/20 border-t-lumi-rose rounded-full animate-spin" />
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>Loading your wellness...</p>
        </div>
      </div>
    );
  }

  // ── Wellness overrides ──────────────────────────────────────────────────────
  // Use live check-in data when available; fall back to dashboard mock data.

  const waterData: WaterData = checkIn
    ? { current: checkIn.water.current, goal: checkIn.water.goal, unit: checkIn.water.unit, history: [] }
    : data.water;

  const sleepData: SleepData = checkIn
    ? { hours: checkIn.sleep.hours, minutes: checkIn.sleep.minutes, quality: checkIn.sleep.quality, goal: 8, weekHistory: data.sleep.weekHistory }
    : data.sleep;

  const moodData: MoodData = checkIn
    ? {
        current: {
          value: checkIn.mood.value,
          label: MOOD_MAP[checkIn.mood.value]?.label ?? checkIn.mood.label,
          emoji: MOOD_MAP[checkIn.mood.value]?.emoji ?? checkIn.mood.emoji,
          timestamp: checkIn.mood.timestamp,
        },
        weekHistory: data.mood.weekHistory,
      }
    : data.mood;

  // ── Wellness score derived from live energy + mood when available ────────────
  const liveScore = checkIn
    ? {
        ...data.wellnessScore,
        value: Math.round(((checkIn.mood.value / 5) * 0.4 + (checkIn.energy.value / 10) * 0.4 + ((10 - checkIn.stress.value) / 10) * 0.2) * 100),
      }
    : data.wellnessScore;

  // ── Dynamic daily greeting ──────────────────────────────────────────────────
  const dailyGreeting = buildDailyGreeting(
    checkIn
      ? { mood: checkIn.mood.value, energy: checkIn.energy.value, stress: checkIn.stress.value, sleepHours: checkIn.sleep.hours, water: checkIn.water.current }
      : { mood: data.mood.current.value, energy: 5, stress: 4, sleepHours: data.sleep.hours, water: data.water.current },
  );

  return (
    <div className="min-h-dvh pb-24" style={{ background: "linear-gradient(180deg, #FFF8FA 0%, #F5EDF9 100%)" }}>
      {/* Header */}
      <DashboardHeader user={data.user} />

      {/* Content */}
      <main className="px-5 space-y-5 max-w-lg mx-auto">
        {/* Greeting + live score + quote */}
        <GreetingCard
          firstName={data.user.firstName}
          score={liveScore}
          quote={data.quote}
        />

        {/* Dynamic daily greeting */}
        <div
          className="rounded-3xl p-4 flex items-center gap-3"
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(216,143,168,0.1)",
            boxShadow: "0 4px 20px rgba(216,143,168,0.06)",
          }}
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(216,143,168,0.1)" }}
          >
            <span style={{ fontSize: 20 }}>{dailyGreeting.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>{dailyGreeting.title}</p>
            <p className="font-body text-lumi-muted" style={{ fontSize: 12 }}>{dailyGreeting.subtitle}</p>
          </div>
          <button
            onClick={() => navigate(dailyGreeting.actionPath)}
            className="shrink-0 px-3 py-1.5 rounded-xl font-body font-bold text-white transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
            style={{ fontSize: 11, background: "linear-gradient(135deg, #D88FA8, #CDB4DB)" }}
          >
            {dailyGreeting.suggestedAction}
          </button>
        </div>

        {/* Quick Actions */}
        <div>
          <SectionTitle title="Quick Actions" />
          <div className="grid grid-cols-4 gap-2.5">
            {quickActions.map((a) => (
              <QuickActionButton key={a.label} icon={a.icon} label={a.label} color={a.color} bgColor={a.bgColor} onClick={() => navigate(a.path)} />
            ))}
          </div>
        </div>

        {/* Lumi companion summary */}
        {lumi && (
          <div
            className="rounded-3xl p-4 flex items-center gap-4"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(205,180,219,0.15)",
              boxShadow: "0 4px 24px rgba(205,180,219,0.1)",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(205,180,219,0.12)" }}
            >
              <span style={{ fontSize: 24 }}>
                {lumi.stage === "seed" ? "🌱" : lumi.stage === "sprout" ? "🌿" : lumi.stage === "flower" ? "🌸" : "🌳"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
                  Lumi · Lv. {lumi.level}
                </span>
                <span className="font-body text-lumi-muted" style={{ fontSize: 11 }}>
                  {STAGE_LABELS[lumi.stage]}
                </span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden mt-1.5" style={{ background: "rgba(205,180,219,0.15)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min((lumi.experience / lumi.experienceToNext) * 100, 100)}%`,
                    background: "linear-gradient(to right, #CDB4DB, #D88FA8)",
                  }}
                />
              </div>
              <p className="font-body text-lumi-muted mt-1" style={{ fontSize: 11 }}>
                {lumi.experience}/{lumi.experienceToNext} XP · {MOOD_EMOJIS[lumi.mood]} {MOOD_LABELS[lumi.mood]}
              </p>
            </div>
          </div>
        )}

        {/* Daily Summary */}
        <div>
          <SectionTitle title="Today's Summary" action="Details" onAction={() => navigate("/progress")} />
          <DailySummaryCard
            exercise={data.exercise}
            nutrition={checkIn
              ? { ...data.nutrition, water: checkIn.water.current, waterGoal: checkIn.water.goal }
              : data.nutrition
            }
            goals={data.dailyGoals}
          />
        </div>

        {/* Habits */}
        <div>
          <SectionTitle title="Today's Habits" action="See all" onAction={() => navigate("/checkin")} />
          <div className="space-y-2.5">
            {data.habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} onToggle={toggleHabit} />
            ))}
          </div>
        </div>

        {/* Water + Sleep — live data from wellness check-in */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WaterTracker data={waterData} onAddWater={addWater} />
          <SleepCard data={sleepData} />
        </div>

        {/* Mood — live from check-in */}
        <MoodCard data={moodData} />

        {/* Exercise Progress */}
        <ProgressCard exercise={data.exercise} />

        {/* Weekly Progress */}
        <WeeklyProgress stats={data.weeklyStats} />

        {/* Recent Activity */}
        <div>
          <SectionTitle title="Recent Activity" action="View all" onAction={() => navigate("/journal")} />
          <div className="space-y-2.5">
            {data.recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-3 rounded-2xl p-3.5"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(216,143,168,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: activity.color }}
                >
                  <span style={{ fontSize: 18 }}>{activity.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-lumi-text truncate" style={{ fontSize: 14 }}>
                    {activity.title}
                  </p>
                  <p className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
                    {activity.description}
                  </p>
                </div>
                <span className="font-body text-lumi-muted shrink-0" style={{ fontSize: 11 }}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Refresh indicator */}
        {isRefreshing && (
          <div className="flex justify-center py-2">
            <div className="w-5 h-5 border-2 border-lumi-rose/20 border-t-lumi-rose rounded-full animate-spin" />
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}
