import { useDashboard } from "../../hooks/useDashboard";
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
  { icon: "🧘", label: "Meditate", color: "#CDB4DB", bgColor: "#F5EDF9" },
  { icon: "🌸", label: "Stretch", color: "#D88FA8", bgColor: "#FBF0F4" },
  { icon: "🌬️", label: "Breathe", color: "#A8D5BA", bgColor: "#EDF7F1" },
  { icon: "📝", label: "Journal", color: "#F7E7A9", bgColor: "#FBF3CE" },
];

export default function HomeDashboard() {
  const { data, isLoading, isRefreshing, toggleHabit, addWater, refresh } = useDashboard();

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

  return (
    <div className="min-h-dvh pb-24" style={{ background: "linear-gradient(180deg, #FFF8FA 0%, #F5EDF9 100%)" }}>
      {/* Header */}
      <DashboardHeader user={data.user} />

      {/* Content */}
      <main className="px-5 space-y-5 max-w-lg mx-auto">
        {/* Greeting + Score + Quote */}
        <GreetingCard
          firstName={data.user.firstName}
          score={data.wellnessScore}
          quote={data.quote}
        />

        {/* Quick Actions */}
        <div>
          <SectionTitle title="Quick Actions" />
          <div className="grid grid-cols-4 gap-2.5">
            {quickActions.map((a) => (
              <QuickActionButton key={a.label} {...a} />
            ))}
          </div>
        </div>

        {/* Daily Summary */}
        <div>
          <SectionTitle title="Today's Summary" action="Details" />
          <DailySummaryCard
            exercise={data.exercise}
            nutrition={data.nutrition}
            goals={data.dailyGoals}
          />
        </div>

        {/* Habits */}
        <div>
          <SectionTitle title="Today's Habits" action="See all" />
          <div className="space-y-2.5">
            {data.habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} onToggle={toggleHabit} />
            ))}
          </div>
        </div>

        {/* Water + Sleep row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WaterTracker data={data.water} onAddWater={addWater} />
          <SleepCard data={data.sleep} />
        </div>

        {/* Mood */}
        <MoodCard data={data.mood} />

        {/* Exercise Progress */}
        <ProgressCard exercise={data.exercise} />

        {/* Weekly Progress */}
        <WeeklyProgress stats={data.weeklyStats} />

        {/* Recent Activity */}
        <div>
          <SectionTitle title="Recent Activity" action="View all" />
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

        {/* Pull to refresh indicator */}
        {isRefreshing && (
          <div className="flex justify-center py-2">
            <div className="w-5 h-5 border-2 border-lumi-rose/20 border-t-lumi-rose rounded-full animate-spin" />
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
