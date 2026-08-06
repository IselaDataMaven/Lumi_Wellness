import { useState, useEffect, useCallback } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { useExercise } from "../app/context/ExerciseContext";

const PHASE_DURATIONS = { in: 4, hold: 4, out: 6, rest: 2 };
const PHASES = ["in", "hold", "out", "rest"] as const;
type Phase = (typeof PHASES)[number];

const phaseLabel: Record<Phase, string> = {
  in: "Breathe In",
  hold: "Hold",
  out: "Breathe Out",
  rest: "Rest",
};
const phaseColor: Record<Phase, string> = {
  in: "#A8D5BA",
  hold: "#CDB4DB",
  out: "#D88FA8",
  rest: "#F7E7A9",
};

const messages = [
  "You're doing beautifully. Keep going. 🌸",
  "Each breath is a gentle gift to yourself. 💜",
  "You are safe. You are here. You are enough.",
  "Move at your own pace — there is no rush.",
  "Notice how your body feels with each moment.",
];

export default function ExercisePlayer() {
  const navigate = useAppNavigate();
  const { selectedExercise: exercise } = useExercise();
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState<Phase>("in");
  const [phaseTime, setPhaseTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const totalDuration = (exercise?.duration ?? 5) * 60;
  const currentPhaseDuration = PHASE_DURATIONS[phase];
  const phaseProgress = phaseTime / currentPhaseDuration;
  const overallProgress = totalTime / totalDuration;

  const nextPhase = useCallback(() => {
    setPhase((prev) => {
      const idx = PHASES.indexOf(prev);
      const next = PHASES[(idx + 1) % PHASES.length];
      if (next === "in") setCycleCount((c) => c + 1);
      return next;
    });
    setPhaseTime(0);
    setMsgIdx((m) => (m + 1) % messages.length);
  }, []);

  useEffect(() => {
    if (paused || finished) return;
    const timer = setInterval(() => {
      setPhaseTime((t) => {
        const next = t + 0.1;
        if (next >= currentPhaseDuration) {
          nextPhase();
          return 0;
        }
        return next;
      });
      setTotalTime((t) => {
        const next = t + 0.1;
        if (next >= totalDuration) {
          setFinished(true);
          return totalDuration;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [paused, finished, currentPhaseDuration, totalDuration, nextPhase]);

  function formatTime(s: number) {
    const mins = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  }

  // Completion screen
  if (finished) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-lumi-hero px-6 text-center lg:pl-64">
        <div className="animate-scale-in flex flex-col items-center gap-6 max-w-sm">
          <div
            className="rounded-full flex items-center justify-center shadow-lumi-lg animate-pulse-glow"
            style={{
              width: 120,
              height: 120,
              background: "linear-gradient(135deg, #EDF7F1, #C8EDD8)",
            }}
          >
            <span style={{ fontSize: 60 }}>🌿</span>
          </div>
          <div>
            <h2
              className="font-display text-lumi-text mb-2"
              style={{ fontSize: 32 }}
            >
              Well done!
            </h2>
            <p
              className="font-body text-lumi-muted mb-1"
              style={{ fontSize: 17, lineHeight: 1.6 }}
            >
              You completed <strong>{exercise?.title}</strong>
            </p>
            <p
              className="font-body text-lumi-muted"
              style={{ fontSize: 15, lineHeight: 1.6 }}
            >
              That was {formatTime(totalDuration)} of gentle care for your body.
              You should feel proud.
            </p>
          </div>
          {/* Stats */}
          <div className="w-full grid grid-cols-2 gap-3">
            <div className="glass rounded-3xl p-4 text-center shadow-lumi">
              <div
                className="font-display text-lumi-text"
                style={{ fontSize: 28 }}
              >
                {cycleCount}
              </div>
              <div
                className="font-body text-lumi-muted"
                style={{ fontSize: 13 }}
              >
                breath cycles
              </div>
            </div>
            <div className="glass rounded-3xl p-4 text-center shadow-lumi">
              <div
                className="font-display text-lumi-text"
                style={{ fontSize: 28 }}
              >
                {formatTime(totalDuration)}
              </div>
              <div
                className="font-body text-lumi-muted"
                style={{ fontSize: 13 }}
              >
                time invested
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={() => navigate("exercises")}
              className="flex-1 rounded-2xl font-body font-bold btn-press py-4"
              style={{
                background: "rgba(216,143,168,0.12)",
                border: "1.5px solid rgba(216,143,168,0.25)",
                color: "#D88FA8",
                fontSize: 15,
              }}
            >
              More exercises
            </button>
            <button
              onClick={() => navigate("dashboard")}
              className="flex-1 rounded-2xl font-body font-bold btn-press py-4 shadow-lumi"
              style={{
                background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
                color: "white",
                fontSize: 15,
              }}
            >
              Go home 🌸
            </button>
          </div>
        </div>
      </div>
    );
  }

  const ringR = 110;
  const ringCirc = 2 * Math.PI * ringR;
  const ringOffset = ringCirc * (1 - phaseProgress);
  const outerR = 138;
  const outerCirc = 2 * Math.PI * outerR;

  return (
    <div
      className="fixed inset-0 flex flex-col lg:pl-64"
      style={{
        background: `radial-gradient(ellipse at center, ${phaseColor[phase]}18 0%, #FFF8FA 70%)`,
        transition: "background 2s ease",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <button onClick={() => navigate("exercises")} className="btn-press">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7A7A7A"
            strokeWidth="2.5"
            strokeLinecap="round"
            width="24"
            height="24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <div
            className="font-body font-bold text-lumi-muted"
            style={{ fontSize: 13, letterSpacing: "0.04em" }}
          >
            {exercise?.title ?? "Exercise"}
          </div>
        </div>
        <div
          className="font-body font-bold"
          style={{ fontSize: 14, color: "#D88FA8" }}
        >
          {formatTime(totalDuration - totalTime)}
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="mx-5 h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(216,143,168,0.15)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${overallProgress * 100}%`,
            background: `linear-gradient(to right, #A8D5BA, #D88FA8)`,
          }}
        />
      </div>

      {/* Main breathing circle */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div
          className="relative flex items-center justify-center"
          style={{ width: 300, height: 300 }}
        >
          {/* Outer glow rings */}
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="absolute inset-0"
          >
            <circle
              cx="150"
              cy="150"
              r={outerR}
              fill="none"
              stroke={phaseColor[phase]}
              strokeWidth="1.5"
              opacity="0.2"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "150px 150px",
                transition: "stroke 2s ease",
              }}
              strokeDasharray={`${outerCirc * overallProgress} ${outerCirc * (1 - overallProgress)}`}
            />
          </svg>

          {/* Breathing circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: 240,
              height: 240,
              background: `radial-gradient(circle, ${phaseColor[phase]}35 0%, ${phaseColor[phase]}12 60%, transparent 80%)`,
              border: `2px solid ${phaseColor[phase]}40`,
              transition: "all 0.5s ease",
              transform:
                phase === "in" || phase === "hold"
                  ? `scale(${0.85 + phaseProgress * 0.22})`
                  : `scale(${1.07 - phaseProgress * 0.22})`,
            }}
          />

          {/* Phase progress ring */}
          <svg
            width="260"
            height="260"
            viewBox="0 0 260 260"
            className="absolute"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="130"
              cy="130"
              r={ringR}
              fill="none"
              stroke={`${phaseColor[phase]}25`}
              strokeWidth="6"
            />
            <circle
              cx="130"
              cy="130"
              r={ringR}
              fill="none"
              stroke={phaseColor[phase]}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={ringCirc}
              strokeDashoffset={ringOffset}
              style={{ transition: "stroke 2s ease" }}
            />
          </svg>

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-1 text-center">
            <div
              className="font-display"
              style={{
                fontSize: 32,
                color: phaseColor[phase],
                transition: "color 1s ease",
                lineHeight: 1,
              }}
            >
              {phaseLabel[phase]}
            </div>
            <div
              className="font-body text-lumi-muted"
              style={{ fontSize: 16, fontWeight: 600 }}
            >
              {Math.ceil(currentPhaseDuration - phaseTime)}s
            </div>
          </div>
        </div>

        {/* Motivational message */}
        <p
          className="font-body text-lumi-muted text-center px-10"
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            fontStyle: "italic",
            maxWidth: 320,
          }}
        >
          {messages[msgIdx]}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 pb-16 px-5">
        {/* Skip back */}
        <button
          onClick={() => {
            setPhase("in");
            setPhaseTime(0);
          }}
          className="flex items-center justify-center rounded-full btn-press"
          style={{
            width: 56,
            height: 56,
            background: "rgba(216,143,168,0.1)",
            border: "1.5px solid rgba(216,143,168,0.2)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D88FA8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="22"
            height="22"
          >
            <polygon points="19 20 9 12 19 4 19 20" />
            <line x1="5" y1="19" x2="5" y2="5" />
          </svg>
        </button>

        {/* Pause/Resume */}
        <button
          onClick={() => setPaused(!paused)}
          className="flex items-center justify-center rounded-full shadow-lumi-md btn-press animate-pulse-glow"
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
          }}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          )}
        </button>

        {/* Skip forward */}
        <button
          onClick={nextPhase}
          className="flex items-center justify-center rounded-full btn-press"
          style={{
            width: 56,
            height: 56,
            background: "rgba(216,143,168,0.1)",
            border: "1.5px solid rgba(216,143,168,0.2)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D88FA8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="22"
            height="22"
          >
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
