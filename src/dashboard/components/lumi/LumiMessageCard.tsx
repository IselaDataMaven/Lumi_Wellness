import type { LumiStage, LumiMood } from "../../../types/lumi";

interface LumiMessageCardProps {
  stage: LumiStage;
  mood: LumiMood;
  growthDays: number;
}

const messages: Record<LumiStage, string[]> = {
  seed: [
    "Every journey begins with a tiny seed of hope.",
    "You planted something beautiful today.",
    "Rest is part of growing. Be gentle.",
  ],
  sprout: [
    "Look how far you've come! Keep going.",
    "Small actions create big changes over time.",
    "Your dedication is helping me grow.",
  ],
  flower: [
    "Together, we're blooming beautifully.",
    "Your consistency inspires me every day.",
    "We've built something wonderful together.",
  ],
  tree: [
    "You've grown into something extraordinary.",
    "Deep roots and strong branches — that's us.",
    "Your wellness journey is truly inspiring.",
  ],
};

export default function LumiMessageCard({ stage, mood, growthDays }: LumiMessageCardProps) {
  // Pick a message based on growth days for variety
  const stageMessages = messages[stage];
  const message = stageMessages[growthDays % stageMessages.length];

  return (
    <div
      className="rounded-3xl p-5 w-full"
      style={{
        background: "linear-gradient(135deg, rgba(251,240,244,0.9), rgba(245,237,249,0.9))",
        border: "1px solid rgba(216,143,168,0.12)",
        boxShadow: "0 4px 24px rgba(216,143,168,0.08)",
      }}
    >
      <p className="font-body text-lumi-muted font-semibold mb-2" style={{ fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase" }}>
        Lumi says...
      </p>
      <p className="font-display text-lumi-text italic" style={{ fontSize: 16, lineHeight: 1.5 }}>
        "{message}"
      </p>
      <p className="font-body text-lumi-muted mt-2" style={{ fontSize: 12 }}>
        Growing together for {growthDays} days 🌱
      </p>
    </div>
  );
}
