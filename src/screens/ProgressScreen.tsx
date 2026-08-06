import { useState } from "react";
import ProgressRing from "../components/ProgressRing";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { weeklyData } from "../data/achievements";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const monthActivity = [3, 8, 5, 12, 9, 14, 18, 4];

function LineChart({
  data,
  color,
  label,
  yKey,
}: {
  data: typeof weeklyData;
  color: string;
  label: string;
  yKey: keyof (typeof weeklyData)[0];
}) {
  const values = data.map((d) => d[yKey] as number);
  const max = 10;
  const w = 280,
    h = 100,
    padX = 10,
    padY = 8;
  const pts = values.map((v, i) => {
    const x = padX + (i / (values.length - 1)) * (w - padX * 2);
    const y = padY + (1 - v / max) * (h - padY * 2);
    return [x, y] as [number, number];
  });

  // Smooth path
  const linePath = pts
    .map(([x, y], i) =>
      i === 0
        ? `M${x},${y}`
        : `C${pts[i - 1][0] + 20},${pts[i - 1][1]} ${x - 20},${y} ${x},${y}`,
    )
    .join(" ");
  const areaPath = `${linePath} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-body font-bold"
          style={{ fontSize: 13, color: "#2D2D2D" }}
        >
          {label}
        </span>
        <span
          className="font-body font-semibold"
          style={{ fontSize: 13, color }}
        >
          Avg {(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)}
          /10
        </span>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ overflow: "visible" }}
      >
        {/* Area fill */}
        <defs>
          <linearGradient id={`grad-${yKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#grad-${yKey})`} />
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill={color}
            stroke="white"
            strokeWidth="2"
          />
        ))}
        {/* Day labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={pts[i][0]}
            y={h + 14}
            textAnchor="middle"
            fontSize="10"
            fill="#7A7A7A"
            fontFamily="Nunito"
          >
            {d.day}
          </text>
        ))}
      </svg>
    </div>
  );
}

function BarChart() {
  const max = Math.max(...monthActivity);
  return (
    <div className="flex items-end gap-1.5" style={{ height: 80 }}>
      {monthActivity.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-xl transition-all duration-700"
            style={{
              height: `${(v / max) * 64}px`,
              background:
                i === months.length - 1
                  ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                  : "rgba(216,143,168,0.2)",
              minHeight: 6,
            }}
          />
          <span
            className="font-body"
            style={{ fontSize: 9, color: "#7A7A7A", fontWeight: 600 }}
          >
            {months[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

const tabs = ["Week", "Month", "Year"];
const stats = [
  {
    label: "Exercises completed",
    value: "23",
    icon: "🏃",
    color: "#A8D5BA",
    bg: "#EDF7F1",
  },
  {
    label: "Check-in streak",
    value: "5",
    icon: "🔥",
    color: "#D88FA8",
    bg: "#FBF0F4",
  },
  {
    label: "Avg pain score",
    value: "4.7",
    icon: "📊",
    color: "#CDB4DB",
    bg: "#F5EDF9",
  },
  {
    label: "Journal entries",
    value: "8",
    icon: "📝",
    color: "#F7E7A9",
    bg: "#FBF3CE",
  },
];

export default function ProgressScreen() {
  const navigate = useAppNavigate();
  const [tab, setTab] = useState("Week");

  return (
    <div className="min-h-screen bg-lumi-gradient pb-28 lg:pb-8 lg:pl-64">
      <div className="px-5 pt-14 lg:pt-8 max-w-2xl lg:max-w-4xl mx-auto lg:mx-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 30, letterSpacing: "-0.01em" }}
          >
            Progress
          </h1>
          <button
            onClick={() => navigate("achievements")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl font-body font-bold btn-press"
            style={{
              background: "rgba(247,231,169,0.25)",
              border: "1.5px solid rgba(247,231,169,0.5)",
              color: "#B8960A",
              fontSize: 13,
            }}
          >
            <span style={{ fontSize: 16 }}>🏆</span> Achievements
          </button>
        </div>

        {/* Overview rings */}
        <div className="glass rounded-3xl p-5 mb-4 shadow-lumi">
          <p
            className="font-body font-bold text-lumi-muted mb-4"
            style={{
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            This Week's Overview
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <ProgressRing
                value={65}
                size={80}
                strokeWidth={8}
                color="#D88FA8"
                label="65%"
                sublabel="pain avg"
              />
              <span
                className="font-body font-bold text-lumi-muted"
                style={{ fontSize: 12 }}
              >
                Pain
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ProgressRing
                value={78}
                size={80}
                strokeWidth={8}
                color="#A8D5BA"
                label="78%"
                sublabel="mood avg"
              />
              <span
                className="font-body font-bold text-lumi-muted"
                style={{ fontSize: 12 }}
              >
                Mood
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ProgressRing
                value={52}
                size={80}
                strokeWidth={8}
                color="#CDB4DB"
                label="52%"
                sublabel="energy"
              />
              <span
                className="font-body font-bold text-lumi-muted"
                style={{ fontSize: 12 }}
              >
                Energy
              </span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-3xl p-4 shadow-lumi card-hover"
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: 24 }}>{s.icon}</span>
                <span
                  className="font-display"
                  style={{ fontSize: 26, color: s.color }}
                >
                  {s.value}
                </span>
              </div>
              <p
                className="font-body text-lumi-muted"
                style={{ fontSize: 12, lineHeight: 1.4 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="glass rounded-3xl p-5 mb-4 shadow-lumi">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-5">
            <p
              className="font-body font-bold text-lumi-muted flex-1"
              style={{
                fontSize: 12,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Trends
            </p>
            <div
              className="flex gap-1 p-1 rounded-2xl"
              style={{ background: "rgba(216,143,168,0.08)" }}
            >
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="px-3 py-1.5 rounded-xl font-body font-bold btn-press transition-all"
                  style={{
                    fontSize: 12,
                    background: tab === t ? "white" : "transparent",
                    color: tab === t ? "#D88FA8" : "#7A7A7A",
                    boxShadow:
                      tab === t ? "0 1px 6px rgba(216,143,168,0.2)" : "none",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6 pb-2">
            <LineChart
              data={weeklyData}
              color="#D88FA8"
              label="Pain Level"
              yKey="pain"
            />
            <LineChart
              data={weeklyData}
              color="#CDB4DB"
              label="Mood"
              yKey="mood"
            />
            <LineChart
              data={weeklyData}
              color="#A8D5BA"
              label="Energy"
              yKey="energy"
            />
          </div>
        </div>

        {/* Monthly activity */}
        <div className="glass rounded-3xl p-5 mb-4 shadow-lumi">
          <p
            className="font-body font-bold text-lumi-muted mb-4"
            style={{
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Monthly Activity
          </p>
          <BarChart />
        </div>
      </div>
    </div>
  );
}
