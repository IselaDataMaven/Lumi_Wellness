import type { LumiMood } from "../../../types/lumi";
import { MOOD_EMOJIS, MOOD_LABELS } from "../../../types/lumi";

interface LumiMoodCardProps {
  mood: LumiMood;
  energy: number;
}

const moodMessages: Record<LumiMood, string> = {
  happy: "Lumi is feeling great today!",
  calm: "Lumi is peaceful and relaxed.",
  tired: "Lumi could use some care...",
  excited: "Lumi is bursting with energy!",
};

export default function LumiMoodCard({ mood, energy }: LumiMoodCardProps) {
  return (
    <div
      className="rounded-3xl p-5 w-full"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "0 4px 24px rgba(216,143,168,0.1)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(216,143,168,0.1)" }}
        >
          <span style={{ fontSize: 24 }}>{MOOD_EMOJIS[mood]}</span>
        </div>
        <div className="flex-1">
          <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
            {MOOD_LABELS[mood]}
          </p>
          <p className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
            {moodMessages[mood]}
          </p>
        </div>
      </div>

      {/* Energy bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1">
          <span className="font-body text-lumi-muted font-semibold" style={{ fontSize: 11 }}>Energy</span>
          <span className="font-body text-lumi-text font-bold" style={{ fontSize: 11 }}>{energy}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(168,213,186,0.2)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${energy}%`, background: energy > 50 ? "#A8D5BA" : "#F7E7A9" }}
          />
        </div>
      </div>
    </div>
  );
}
