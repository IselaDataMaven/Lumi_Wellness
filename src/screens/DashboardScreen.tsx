import LumiAvatar from "../components/LumiAvatar";
import ProgressRing from "../components/ProgressRing";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { useTheme } from "../app/context/ThemeContext";
import type { Screen } from "../types";
import { exercises } from "../data/exercises";

const affirmations = [
  "You are more resilient than you know. Each breath is a new beginning.",
  "Be gentle with yourself today. Small steps lead to beautiful places.",
  "Your body is doing its best, and that is always enough.",
  "Rest is not giving up — it is giving your body what it needs.",
  "Today's gentleness is tomorrow's strength.",
];

const today = new Date();
const dayOfYear = Math.floor(
  (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000,
);
const affirmation = affirmations[dayOfYear % affirmations.length];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const streakMap = [true, true, true, true, true, false, false];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

const quickActions = [
  {
    label: "Check In",
    icon: "💭",
    screen: "checkin" as Screen,
    color: "#D88FA8",
    bg: "#FBF0F4",
  },
  {
    label: "Exercise",
    icon: "🌿",
    screen: "exercises" as Screen,
    color: "#A8D5BA",
    bg: "#EDF7F1",
  },
  {
    label: "Journal",
    icon: "📓",
    screen: "journal" as Screen,
    color: "#CDB4DB",
    bg: "#F5EDF9",
  },
  {
    label: "Progress",
    icon: "📈",
    screen: "progress" as Screen,
    color: "#F7E7A9",
    bg: "#FBF3CE",
  },
];

const recentActivity = [
  {
    label: "Morning Gentle Stretch",
    time: "Yesterday · 10 min",
    icon: "🌸",
    color: "#FBF0F4",
  },
  { label: "Daily Check-in", time: "2 days ago", icon: "💭", color: "#F5EDF9" },
  {
    label: "4-7-8 Calming Breath",
    time: "2 days ago · 5 min",
    icon: "🌬️",
    color: "#EDF7F1",
  },
];

export default function DashboardScreen() {
  const navigate = useAppNavigate();
  const { darkMode } = useTheme();
  const todayExercises = exercises.slice(0, 3);

  return (
    <div className="min-h-screen bg-lumi-gradient pb-28 lg:pb-8 lg:pl-64">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        {/* Header */}
        <div className="px-5 pt-14 lg:pt-8 pb-2">
          <div className="flex items-start justify-between">
            <div>
              <p
                className="font-body text-lumi-muted font-semibold mb-1"
                style={{ fontSize: 13, letterSpacing: "0.03em" }}
              >
                {getGreeting()}
              </p>
              <h1
                className="font-display text-lumi-text"
                style={{
                  fontSize: 30,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                Sofia
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("achievements")}
                className="relative flex items-center gap-1.5 px-3 py-2 rounded-2xl font-body font-bold btn-press"
                style={{
                  background: "rgba(247,231,169,0.3)",
                  border: "1px solid rgba(247,231,169,0.5)",
                  color: "#B8960A",
                  fontSize: 13,
                }}
              >
                <span style={{ fontSize: 16 }}>🔥</span>5 days
              </button>
              <button
                className="relative rounded-full overflow-hidden shadow-lumi"
                style={{ width: 44, height: 44 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-display text-white"
                    style={{ fontSize: 18 }}
                  >
                    S
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Lumi greeting card */}
        <div className="px-5 pt-4">
          <div
            className="relative rounded-3xl p-5 overflow-hidden shadow-lumi-md"
            style={{
              background:
                "linear-gradient(135deg, #FBF0F4 0%, #F5EDF9 50%, #EDF7F1 100%)",
              border: "1px solid rgba(216,143,168,0.12)",
            }}
          >
            {/* Decorative blob */}
            <div
              className="absolute -right-8 -top-8 rounded-full opacity-30"
              style={{
                width: 120,
                height: 120,
                background: "radial-gradient(circle, #CDB4DB, transparent)",
              }}
            />
            <div className="flex items-start gap-4">
              <LumiAvatar size="md" glow animate />
              <div className="flex-1 min-w-0">
                <p
                  className="font-body text-lumi-muted font-semibold mb-1"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Today's Affirmation
                </p>
                <p
                  className="font-display text-lumi-text"
                  style={{ fontSize: 16, lineHeight: 1.5 }}
                >
                  "{affirmation}"
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => navigate("checkin")}
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3 font-body font-bold btn-press shadow-lumi"
                style={{
                  background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
                  color: "white",
                  fontSize: 14,
                }}
              >
                <span>Start today's check-in</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  width="14"
                  height="14"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress ring + streak row */}
        <div className="px-5 pt-4 grid grid-cols-2 gap-3">
          {/* Progress */}
          <div className="glass rounded-3xl p-4 shadow-lumi flex flex-col items-center gap-2 card-hover">
            <p
              className="font-body text-lumi-muted font-semibold"
              style={{
                fontSize: 11,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Today's Goal
            </p>
            <ProgressRing
              value={65}
              size={90}
              strokeWidth={9}
              color="#D88FA8"
              label="65%"
              sublabel="done"
            />
            <p
              className="font-body text-lumi-text font-bold text-center"
              style={{ fontSize: 13 }}
            >
              2 of 3 done
            </p>
          </div>

          {/* Weekly streak */}
          <div className="glass rounded-3xl p-4 shadow-lumi card-hover">
            <p
              className="font-body text-lumi-muted font-semibold mb-3"
              style={{
                fontSize: 11,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              This Week
            </p>
            <div className="grid grid-cols-7 gap-0.5">
              {weekDays.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: 28,
                      height: 28,
                      background: streakMap[i]
                        ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                        : "rgba(216,143,168,0.1)",
                      border:
                        i === new Date().getDay() - 1
                          ? "2px solid #D88FA8"
                          : "none",
                    }}
                  >
                    {streakMap[i] && (
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="10"
                        height="10"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </div>
                  <span
                    className="font-body"
                    style={{ fontSize: 9, color: "#7A7A7A", fontWeight: 600 }}
                  >
                    {d}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <span style={{ fontSize: 18 }}>🔥</span>
              <span
                className="font-body font-bold text-lumi-text"
                style={{ fontSize: 14 }}
              >
                5 day streak!
              </span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="px-5 pt-4">
          <p
            className="font-body text-lumi-muted font-bold mb-3"
            style={{
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Quick Actions
          </p>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                onClick={() => navigate(a.screen)}
                className="flex flex-col items-center gap-2 rounded-2xl py-4 btn-press card-hover shadow-lumi"
                style={{ background: a.bg, border: `1px solid ${a.color}22` }}
              >
                <span style={{ fontSize: 24 }}>{a.icon}</span>
                <span
                  className="font-body font-bold text-center"
                  style={{ fontSize: 11, color: "#2D2D2D", lineHeight: 1.2 }}
                >
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended today */}
        <div className="px-5 pt-5">
          <div className="flex items-center justify-between mb-3">
            <p
              className="font-body text-lumi-muted font-bold"
              style={{
                fontSize: 12,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Recommended Today
            </p>
            <button
              onClick={() => navigate("exercises")}
              className="font-body font-bold text-lumi-rose btn-press"
              style={{ fontSize: 13, color: "#D88FA8" }}
            >
              See all
            </button>
          </div>
          <div className="space-y-3">
            {todayExercises.map((ex, i) => (
              <button
                key={ex.id}
                onClick={() => navigate("exercises")}
                className="w-full glass rounded-2xl p-4 flex items-center gap-4 shadow-lumi card-hover btn-press text-left"
              >
                <div
                  className="flex items-center justify-center rounded-2xl shrink-0"
                  style={{ width: 52, height: 52, background: ex.bgColor }}
                >
                  <span style={{ fontSize: 24 }}>{["🌸", "🌬️", "💆"][i]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-body font-bold text-lumi-text mb-0.5"
                    style={{ fontSize: 15 }}
                  >
                    {ex.title}
                  </div>
                  <div
                    className="font-body text-lumi-muted"
                    style={{ fontSize: 13 }}
                  >
                    {ex.duration} min · {ex.difficulty} · {ex.bodyArea}
                  </div>
                </div>
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(216,143,168,0.1)",
                  }}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#D88FA8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    width="14"
                    height="14"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="px-5 pt-5">
          <p
            className="font-body text-lumi-muted font-bold mb-3"
            style={{
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Recent Activity
          </p>
          <div className="glass rounded-3xl overflow-hidden shadow-lumi">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3.5"
                style={{
                  borderBottom:
                    i < recentActivity.length - 1
                      ? "1px solid rgba(216,143,168,0.08)"
                      : "none",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl shrink-0"
                  style={{ width: 40, height: 40, background: item.color }}
                >
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-body font-semibold text-lumi-text"
                    style={{ fontSize: 14 }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="font-body text-lumi-muted"
                    style={{ fontSize: 12 }}
                  >
                    {item.time}
                  </div>
                </div>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#CDB4DB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  width="14"
                  height="14"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-8" />
      </div>
    </div>
  );
}
