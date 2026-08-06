import type { LumiStage, LumiMood } from "../../../types/lumi";

interface LumiAvatarProps {
  stage: LumiStage;
  mood: LumiMood;
  size?: number;
  animate?: boolean;
}

const stageColors: Record<LumiStage, { primary: string; secondary: string; bg: string }> = {
  seed: { primary: "#A8D5BA", secondary: "#C8EDD8", bg: "rgba(168,213,186,0.12)" },
  sprout: { primary: "#CDB4DB", secondary: "#E8D8F0", bg: "rgba(205,180,219,0.12)" },
  flower: { primary: "#D88FA8", secondary: "#F0C5D5", bg: "rgba(216,143,168,0.12)" },
  tree: { primary: "#F7E7A9", secondary: "#FBF3CE", bg: "rgba(247,231,169,0.15)" },
};

const stageIcons: Record<LumiStage, string> = {
  seed: "🌱",
  sprout: "🌿",
  flower: "🌸",
  tree: "🌳",
};

export default function LumiAvatar({ stage, mood, size = 120, animate = true }: LumiAvatarProps) {
  const colors = stageColors[stage];

  return (
    <div
      className={`relative flex items-center justify-center ${animate ? "animate-float-gentle" : ""}`}
      style={{ width: size, height: size }}
    >
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
          transform: "scale(1.4)",
        }}
      />

      {/* Main body */}
      <div
        className="relative flex items-center justify-center rounded-full shadow-lumi"
        style={{
          width: size * 0.75,
          height: size * 0.75,
          background: `linear-gradient(135deg, ${colors.bg}, ${colors.secondary}40)`,
          border: `2px solid ${colors.primary}40`,
        }}
      >
        <span style={{ fontSize: size * 0.35 }}>{stageIcons[stage]}</span>
      </div>

      {/* Mood indicator */}
      <div
        className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full shadow-lumi"
        style={{
          width: size * 0.28,
          height: size * 0.28,
          background: "white",
          border: `1.5px solid ${colors.primary}30`,
        }}
      >
        <span style={{ fontSize: size * 0.14 }}>
          {mood === "happy" ? "😊" : mood === "calm" ? "🌿" : mood === "tired" ? "😴" : "✨"}
        </span>
      </div>
    </div>
  );
}
