import { useState } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { achievements } from "../data/achievements";

const categories = [
  "All",
  "streak",
  "exercise",
  "journal",
  "checkin",
  "milestone",
];
const catLabel: Record<string, string> = {
  All: "All",
  streak: "🔥 Streaks",
  exercise: "🌸 Exercise",
  journal: "📝 Journal",
  checkin: "💭 Check-in",
  milestone: "🌟 Milestones",
};

export default function AchievementsScreen() {
  const navigate = useAppNavigate();
  const [cat, setCat] = useState("All");

  const filtered = achievements.filter(
    (a) => cat === "All" || a.category === cat,
  );
  const earned = achievements.filter((a) => a.earned).length;
  const total = achievements.length;

  return (
    <div className="min-h-screen bg-lumi-gradient pb-28 lg:pb-8 lg:pl-64">
      <div className="px-5 pt-14 lg:pt-8 max-w-2xl mx-auto lg:mx-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 30, letterSpacing: "-0.01em" }}
          >
            Achievements
          </h1>
          <button onClick={() => navigate("progress")} className="btn-press">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7A7A7A"
              strokeWidth="2"
              strokeLinecap="round"
              width="22"
              height="22"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress summary */}
        <div
          className="relative rounded-3xl p-5 mb-5 overflow-hidden shadow-lumi-md"
          style={{
            background: "linear-gradient(135deg, #FBF0F4 0%, #F5EDF9 100%)",
            border: "1px solid rgba(216,143,168,0.12)",
          }}
        >
          <div
            className="absolute -right-6 -top-6 rounded-full opacity-20"
            style={{ width: 120, height: 120, background: "#CDB4DB" }}
          />
          <div className="relative">
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="font-display text-lumi-text"
                style={{ fontSize: 42 }}
              >
                {earned}
              </span>
              <span
                className="font-body text-lumi-muted font-semibold"
                style={{ fontSize: 16 }}
              >
                / {total} earned
              </span>
            </div>
            <div
              className="h-2.5 rounded-full overflow-hidden mb-2"
              style={{ background: "rgba(216,143,168,0.15)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(earned / total) * 100}%`,
                  background: "linear-gradient(to right, #D88FA8, #CDB4DB)",
                }}
              />
            </div>
            <p className="font-body text-lumi-muted" style={{ fontSize: 13 }}>
              You're {total - earned} achievements away from completing your
              collection 🌸
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="shrink-0 px-3.5 py-2 rounded-2xl font-body font-bold btn-press transition-all"
              style={{
                fontSize: 12,
                background:
                  cat === c
                    ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                    : "rgba(255,255,255,0.8)",
                color: cat === c ? "white" : "#7A7A7A",
                border:
                  cat === c ? "none" : "1.5px solid rgba(216,143,168,0.15)",
              }}
            >
              {catLabel[c]}
            </button>
          ))}
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {filtered.map((a) => (
            <div
              key={a.id}
              className="glass rounded-3xl p-4 shadow-lumi card-hover flex flex-col items-center text-center gap-2"
              style={{ opacity: a.earned ? 1 : 0.55 }}
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center rounded-full shadow-lumi"
                style={{
                  width: 64,
                  height: 64,
                  background: a.earned
                    ? `radial-gradient(circle, ${a.color}40, ${a.color}15)`
                    : "rgba(216,143,168,0.06)",
                  border: `2px solid ${a.earned ? a.color + "60" : "rgba(216,143,168,0.1)"}`,
                  fontSize: 30,
                }}
              >
                {a.earned ? (
                  <span>{a.icon}</span>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(216,143,168,0.4)"
                    strokeWidth="2"
                    width="24"
                    height="24"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <div
                  className="font-body font-bold text-lumi-text"
                  style={{ fontSize: 14, lineHeight: 1.3 }}
                >
                  {a.title}
                </div>
                <div
                  className="font-body text-lumi-muted mt-0.5"
                  style={{ fontSize: 11, lineHeight: 1.4 }}
                >
                  {a.description}
                </div>
              </div>

              {a.earned ? (
                <div
                  className="flex items-center gap-1 px-2.5 py-1 rounded-xl"
                  style={{ background: `${a.color}20` }}
                >
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke={a.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="10"
                    height="10"
                  >
                    <path d="M1 6l3.5 3.5L11 2" />
                  </svg>
                  <span
                    className="font-body font-bold"
                    style={{ fontSize: 10, color: a.color }}
                  >
                    {a.date}
                  </span>
                </div>
              ) : (
                <span
                  className="font-body font-semibold"
                  style={{ fontSize: 10, color: "#7A7A7A" }}
                >
                  Locked
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Encouragement */}
        <div
          className="mt-6 rounded-3xl p-5 flex items-center gap-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(247,231,169,0.3), rgba(168,213,186,0.2))",
            border: "1px solid rgba(247,231,169,0.4)",
          }}
        >
          <span style={{ fontSize: 36 }}>🌱</span>
          <p
            className="font-body text-lumi-text"
            style={{ fontSize: 14, lineHeight: 1.6 }}
          >
            Every achievement here represents real courage. Keep showing up for
            yourself — the flowers will keep blooming.
          </p>
        </div>
      </div>
    </div>
  );
}
