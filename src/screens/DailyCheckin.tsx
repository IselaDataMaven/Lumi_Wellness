import { useState } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import LumiAvatar from "../components/LumiAvatar";

const moods = [
  { value: 1, emoji: "😔", label: "Rough" },
  { value: 2, emoji: "😕", label: "Low" },
  { value: 3, emoji: "😐", label: "Okay" },
  { value: 4, emoji: "🙂", label: "Good" },
  { value: 5, emoji: "😊", label: "Great" },
];

const energyLevels = ["🪫", "😴", "🌤️", "⚡", "✨"];
const energyLabels = ["Depleted", "Tired", "Moderate", "Energised", "Vibrant"];
const sleepLevels = ["😫", "😪", "😶", "😌", "🌙"];
const sleepLabels = ["Terrible", "Poor", "Fair", "Good", "Wonderful"];
const stressEmojis = ["🌊", "🌀", "😤", "😰", "🆘"];
const stressLabels = ["Calm", "Mild", "Moderate", "High", "Overwhelmed"];

function painColor(v: number) {
  if (v <= 2) return "#A8D5BA";
  if (v <= 4) return "#C8EDD8";
  if (v <= 6) return "#CDB4DB";
  if (v <= 8) return "#D88FA8";
  return "#C47A9A";
}

function painLabel(v: number) {
  if (v === 0) return "No pain";
  if (v <= 2) return "Very mild";
  if (v <= 4) return "Mild";
  if (v <= 6) return "Moderate";
  if (v <= 8) return "Significant";
  return "Severe";
}

export default function DailyCheckin() {
  const navigate = useAppNavigate();
  const [step, setStep] = useState(0);
  const [pain, setPain] = useState(3);
  const [mood, setMood] = useState(3);
  const [energy, setEnergy] = useState(2);
  const [sleep, setSleep] = useState(3);
  const [stress, setStress] = useState(1);
  const [saved, setSaved] = useState(false);

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  function handleSave() {
    setSaved(true);
    setTimeout(() => navigate("success"), 1400);
  }

  if (saved) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-lumi-hero px-6 lg:pl-64">
        <div className="animate-scale-in flex flex-col items-center gap-6 text-center max-w-sm">
          <div className="relative">
            <div
              className="absolute inset-0 animate-pulse-glow rounded-full"
              style={{ transform: "scale(1.5)" }}
            />
            <LumiAvatar size="xl" glow animate />
          </div>
          <div>
            <h2
              className="font-display text-lumi-text mb-2"
              style={{ fontSize: 32 }}
            >
              Check-in saved!
            </h2>
            <p
              className="font-body text-lumi-muted"
              style={{ fontSize: 16, lineHeight: 1.6 }}
            >
              Thank you for taking a moment to check in with yourself. That
              takes courage.
            </p>
          </div>
          <div className="flex gap-2">
            {["🌸", "⭐", "🌿", "💜", "✨"].map((e, i) => (
              <span
                key={i}
                className="animate-bounce-gentle"
                style={{ fontSize: 24, animationDelay: `${i * 0.1}s` }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    // Step 0: Pain
    <div key="pain" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            background: "rgba(216,143,168,0.12)",
          }}
        >
          <span style={{ fontSize: 28 }}>🌡️</span>
        </div>
        <div>
          <h3 className="font-display text-lumi-text" style={{ fontSize: 24 }}>
            Pain level
          </h3>
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            How is your body feeling right now?
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-4">
        <div
          className="flex items-center justify-center rounded-full shadow-lumi-md"
          style={{
            width: 100,
            height: 100,
            background: `radial-gradient(circle, ${painColor(pain)}40 0%, ${painColor(pain)}18 60%, transparent 80%)`,
            border: `3px solid ${painColor(pain)}`,
          }}
        >
          <span
            className="font-display text-lumi-text"
            style={{ fontSize: 36, lineHeight: 1 }}
          >
            {pain}
          </span>
        </div>
        <span
          className="font-body font-bold"
          style={{ color: painColor(pain), fontSize: 16 }}
        >
          {painLabel(pain)}
        </span>
      </div>

      {/* Gradient track slider */}
      <div className="mt-6">
        <div
          className="relative h-3 rounded-full mb-3"
          style={{
            background:
              "linear-gradient(to right, #A8D5BA, #C8EDD8, #CDB4DB, #D88FA8, #C47A9A)",
          }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-4 shadow-lumi-md transition-all duration-150"
            style={{
              left: `calc(${((pain - 1) / 9) * 100}% - 14px)`,
              background: painColor(pain),
              borderColor: "white",
            }}
          />
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={pain}
          onChange={(e) => setPain(Number(e.target.value))}
          className="w-full opacity-0 absolute"
          style={{ height: 48, marginTop: -40, cursor: "pointer" }}
        />
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              onClick={() => setPain(n)}
              className="flex flex-col items-center btn-press"
              style={{ width: 28 }}
            >
              <div
                className="rounded-full transition-all duration-200"
                style={{
                  width: pain === n ? 28 : 20,
                  height: pain === n ? 28 : 20,
                  background:
                    pain === n ? painColor(n) : "rgba(216,143,168,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="font-body font-bold"
                  style={{
                    fontSize: pain === n ? 12 : 10,
                    color: pain === n ? "white" : "#7A7A7A",
                  }}
                >
                  {n}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p
        className="mt-4 font-body text-lumi-muted text-center"
        style={{ fontSize: 13, lineHeight: 1.5 }}
      >
        There's no right or wrong answer. Just check in gently.
      </p>
    </div>,

    // Step 1: Mood
    <div key="mood" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            background: "rgba(205,180,219,0.15)",
          }}
        >
          <span style={{ fontSize: 28 }}>💜</span>
        </div>
        <div>
          <h3 className="font-display text-lumi-text" style={{ fontSize: 24 }}>
            Mood
          </h3>
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            How are you feeling emotionally?
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-3">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setMood(m.value)}
            className="flex flex-col items-center gap-2 rounded-2xl py-4 btn-press transition-all duration-200"
            style={{
              background:
                mood === m.value
                  ? "rgba(205,180,219,0.2)"
                  : "rgba(255,255,255,0.5)",
              border: `2px solid ${mood === m.value ? "#CDB4DB" : "transparent"}`,
              transform: mood === m.value ? "scale(1.08)" : "scale(1)",
              boxShadow:
                mood === m.value ? "0 4px 20px rgba(205,180,219,0.3)" : "none",
            }}
          >
            <span style={{ fontSize: 32 }}>{m.emoji}</span>
            <span
              className="font-body font-semibold"
              style={{
                fontSize: 11,
                color: mood === m.value ? "#CDB4DB" : "#7A7A7A",
              }}
            >
              {m.label}
            </span>
          </button>
        ))}
      </div>
    </div>,

    // Step 2: Energy
    <div key="energy" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            background: "rgba(247,231,169,0.25)",
          }}
        >
          <span style={{ fontSize: 28 }}>⚡</span>
        </div>
        <div>
          <h3 className="font-display text-lumi-text" style={{ fontSize: 24 }}>
            Energy
          </h3>
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            What's your energy like today?
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-3">
        {energyLevels.map((e, i) => (
          <button
            key={i}
            onClick={() => setEnergy(i)}
            className="flex flex-col items-center gap-2 rounded-2xl py-4 btn-press transition-all duration-200"
            style={{
              background:
                energy === i
                  ? "rgba(247,231,169,0.3)"
                  : "rgba(255,255,255,0.5)",
              border: `2px solid ${energy === i ? "#F7E7A9" : "transparent"}`,
              transform: energy === i ? "scale(1.08)" : "scale(1)",
            }}
          >
            <span style={{ fontSize: 30 }}>{e}</span>
            <span
              className="font-body font-semibold text-center"
              style={{
                fontSize: 10,
                color: energy === i ? "#B8960A" : "#7A7A7A",
                lineHeight: 1.2,
              }}
            >
              {energyLabels[i]}
            </span>
          </button>
        ))}
      </div>
    </div>,

    // Step 3: Sleep
    <div key="sleep" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            background: "rgba(168,213,186,0.15)",
          }}
        >
          <span style={{ fontSize: 28 }}>🌙</span>
        </div>
        <div>
          <h3 className="font-display text-lumi-text" style={{ fontSize: 24 }}>
            Sleep quality
          </h3>
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            How did you sleep last night?
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-3">
        {sleepLevels.map((e, i) => (
          <button
            key={i}
            onClick={() => setSleep(i)}
            className="flex flex-col items-center gap-2 rounded-2xl py-4 btn-press transition-all duration-200"
            style={{
              background:
                sleep === i ? "rgba(168,213,186,0.2)" : "rgba(255,255,255,0.5)",
              border: `2px solid ${sleep === i ? "#A8D5BA" : "transparent"}`,
              transform: sleep === i ? "scale(1.08)" : "scale(1)",
            }}
          >
            <span style={{ fontSize: 30 }}>{e}</span>
            <span
              className="font-body font-semibold text-center"
              style={{
                fontSize: 10,
                color: sleep === i ? "#3E8B5E" : "#7A7A7A",
                lineHeight: 1.2,
              }}
            >
              {sleepLabels[i]}
            </span>
          </button>
        ))}
      </div>
    </div>,

    // Step 4: Stress
    <div key="stress" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            background: "rgba(216,143,168,0.12)",
          }}
        >
          <span style={{ fontSize: 28 }}>🌊</span>
        </div>
        <div>
          <h3 className="font-display text-lumi-text" style={{ fontSize: 24 }}>
            Stress level
          </h3>
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            How is your mind feeling today?
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-3">
        {stressEmojis.map((e, i) => (
          <button
            key={i}
            onClick={() => setStress(i)}
            className="flex flex-col items-center gap-2 rounded-2xl py-4 btn-press transition-all duration-200"
            style={{
              background:
                stress === i
                  ? "rgba(216,143,168,0.15)"
                  : "rgba(255,255,255,0.5)",
              border: `2px solid ${stress === i ? "#D88FA8" : "transparent"}`,
              transform: stress === i ? "scale(1.08)" : "scale(1)",
            }}
          >
            <span style={{ fontSize: 30 }}>{e}</span>
            <span
              className="font-body font-semibold text-center"
              style={{
                fontSize: 10,
                color: stress === i ? "#D88FA8" : "#7A7A7A",
                lineHeight: 1.2,
              }}
            >
              {stressLabels[i]}
            </span>
          </button>
        ))}
      </div>
    </div>,
  ];

  return (
    <div className="fixed inset-0 flex flex-col bg-lumi-gradient lg:pl-64">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-5 pt-14 pb-4">
        <button onClick={() => navigate("dashboard")} className="btn-press">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7A7A7A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1.5">
            <p
              className="font-body font-bold text-lumi-muted"
              style={{ fontSize: 12, letterSpacing: "0.04em" }}
            >
              Step {step + 1} of {totalSteps}
            </p>
            <p
              className="font-body font-bold"
              style={{ fontSize: 12, color: "#D88FA8" }}
            >
              {Math.round(progress)}%
            </p>
          </div>
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(216,143,168,0.15)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #D88FA8, #CDB4DB)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <div className="glass rounded-3xl p-6 shadow-lumi-md">
          {steps[step]}
        </div>
      </div>

      {/* Navigation */}
      <div className="px-5 pb-10 flex gap-3">
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center justify-center rounded-2xl font-body font-bold btn-press"
            style={{
              height: 58,
              width: 58,
              background: "rgba(216,143,168,0.1)",
              border: "1px solid rgba(216,143,168,0.2)",
              color: "#D88FA8",
              fontSize: 22,
            }}
          >
            ←
          </button>
        )}
        <button
          onClick={step < totalSteps - 1 ? () => setStep(step + 1) : handleSave}
          className="flex-1 flex items-center justify-center gap-2 rounded-2xl font-body font-bold btn-press shadow-lumi-md"
          style={{
            height: 58,
            fontSize: 17,
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
            color: "white",
          }}
        >
          {step < totalSteps - 1 ? "Next" : "Save Check-in 🌸"}
        </button>
      </div>
    </div>
  );
}
