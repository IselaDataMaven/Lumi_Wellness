import { useAppNavigate } from "../hooks/useAppNavigate";
import { useExercise } from "../app/context/ExerciseContext";

const difficultyColors = {
  Gentle: "#A8D5BA",
  Easy: "#CDB4DB",
  Moderate: "#D88FA8",
};
const categoryEmoji: Record<string, string> = {
  Stretching: "🌸",
  Breathing: "🌬️",
  Mindfulness: "🧘",
  Mobility: "🤸",
  Strength: "💪",
};

export default function ExerciseDetail() {
  const navigate = useAppNavigate();
  const { selectedExercise: exercise } = useExercise();
  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-lumi-gradient px-6 lg:pl-64">
        <span style={{ fontSize: 64 }}>🌿</span>
        <h3
          className="font-display text-lumi-text mt-4 mb-2"
          style={{ fontSize: 24 }}
        >
          No exercise selected
        </h3>
        <p
          className="font-body text-lumi-muted text-center"
          style={{ fontSize: 15 }}
        >
          Head back to the library to choose one.
        </p>
        <button
          onClick={() => navigate("exercises")}
          className="mt-6 px-8 py-3 rounded-2xl font-body font-bold btn-press shadow-lumi"
          style={{
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
            color: "white",
            fontSize: 16,
          }}
        >
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pb-28 lg:pb-8 lg:pl-64"
      style={{
        background: `linear-gradient(160deg, ${exercise.bgColor} 0%, #F5EDF9 50%, #FFF8FA 100%)`,
      }}
    >
      {/* Back button */}
      <div className="px-5 pt-14 lg:pt-8">
        <button
          onClick={() => navigate("exercises")}
          className="flex items-center gap-2 font-body font-semibold text-lumi-muted btn-press"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            width="20"
            height="20"
          >
            <path d="M15 10H5M10 15l-5-5 5-5" />
          </svg>
          Back
        </button>
      </div>

      {/* Hero illustration */}
      <div
        className="relative mx-5 mt-4 rounded-3xl overflow-hidden shadow-lumi-md"
        style={{
          height: 220,
          background: `linear-gradient(135deg, ${exercise.bgColor} 0%, ${exercise.color}30 100%)`,
        }}
      >
        <div
          className="absolute right-6 top-6 rounded-full opacity-25"
          style={{ width: 100, height: 100, background: exercise.color }}
        />
        <div
          className="absolute left-10 bottom-6 rounded-full opacity-15"
          style={{ width: 70, height: 70, background: exercise.color }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span style={{ fontSize: 96 }}>
            {categoryEmoji[exercise.category] || "🌸"}
          </span>
        </div>
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-2xl font-body font-bold"
          style={{
            fontSize: 12,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            color: exercise.color,
          }}
        >
          {exercise.category}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 mt-6 max-w-2xl">
        {/* Title & meta */}
        <h1
          className="font-display text-lumi-text mb-2"
          style={{ fontSize: 28, lineHeight: 1.2 }}
        >
          {exercise.title}
        </h1>
        <p
          className="font-body text-lumi-muted mb-4"
          style={{ fontSize: 16, lineHeight: 1.65 }}
        >
          {exercise.description}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <span
            className="px-3 py-1.5 rounded-2xl font-body font-bold"
            style={{
              fontSize: 13,
              background: `${difficultyColors[exercise.difficulty]}22`,
              color: difficultyColors[exercise.difficulty],
            }}
          >
            {exercise.difficulty}
          </span>
          <span
            className="px-3 py-1.5 rounded-2xl font-body font-bold"
            style={{
              fontSize: 13,
              background: "rgba(216,143,168,0.12)",
              color: "#D88FA8",
            }}
          >
            ⏱ {exercise.duration} min
          </span>
          <span
            className="px-3 py-1.5 rounded-2xl font-body font-bold"
            style={{
              fontSize: 13,
              background: "rgba(205,180,219,0.15)",
              color: "#9A7BB0",
            }}
          >
            📍 {exercise.bodyArea}
          </span>
        </div>

        {/* Benefits */}
        <div className="glass rounded-3xl p-5 shadow-lumi mb-4">
          <h3
            className="font-display text-lumi-text mb-3"
            style={{ fontSize: 18 }}
          >
            Benefits
          </h3>
          <div className="space-y-2.5">
            {exercise.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    width: 24,
                    height: 24,
                    background: "rgba(168,213,186,0.25)",
                  }}
                >
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="#A8D5BA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="10"
                    height="10"
                  >
                    <path d="M1 6l3.5 3.5L11 2" />
                  </svg>
                </div>
                <p
                  className="font-body text-lumi-text"
                  style={{ fontSize: 14, lineHeight: 1.5 }}
                >
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="glass rounded-3xl p-5 shadow-lumi mb-6">
          <h3
            className="font-display text-lumi-text mb-3"
            style={{ fontSize: 18 }}
          >
            How to do it
          </h3>
          <div className="space-y-4">
            {exercise.steps.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="shrink-0 rounded-full flex items-center justify-center font-body font-bold"
                  style={{
                    width: 28,
                    height: 28,
                    background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
                    color: "white",
                    fontSize: 13,
                  }}
                >
                  {i + 1}
                </div>
                <p
                  className="font-body text-lumi-text"
                  style={{ fontSize: 14, lineHeight: 1.55, paddingTop: 4 }}
                >
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 px-5 pb-10 pt-4 glass lg:left-64"
        style={{ borderTop: "1px solid rgba(216,143,168,0.1)" }}
      >
        <button
          onClick={() => navigate("exercise-player")}
          className="w-full flex items-center justify-center gap-3 rounded-2xl font-body font-bold btn-press shadow-lumi-lg"
          style={{
            height: 60,
            fontSize: 18,
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
            color: "white",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
          Start Exercise
        </button>
      </div>
    </div>
  );
}
