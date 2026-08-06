import type { LumiPet } from "../../../types/lumi";
import { STAGE_LABELS } from "../../../types/lumi";

interface LumiGrowthCardProps {
  lumi: LumiPet;
}

export default function LumiGrowthCard({ lumi }: LumiGrowthCardProps) {
  const xpPercent = Math.min((lumi.experience / lumi.experienceToNext) * 100, 100);

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
      <div className="flex items-center justify-between mb-3">
        <span className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>
          Growth
        </span>
        <span
          className="px-2.5 py-1 rounded-xl font-body font-bold"
          style={{ fontSize: 11, background: "rgba(205,180,219,0.15)", color: "#9A7BB0" }}
        >
          {STAGE_LABELS[lumi.stage]}
        </span>
      </div>

      {/* Level */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="font-display text-lumi-text" style={{ fontSize: 28 }}>
          Lv. {lumi.level}
        </span>
        <span className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
          {lumi.experience}/{lumi.experienceToNext} XP
        </span>
      </div>

      {/* XP bar */}
      <div className="h-3 rounded-full overflow-hidden mb-3" style={{ background: "rgba(205,180,219,0.15)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${xpPercent}%`, background: "linear-gradient(to right, #CDB4DB, #D88FA8)" }}
        />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center">
          <p className="font-body font-bold text-lumi-text" style={{ fontSize: 16 }}>{lumi.growthDays}</p>
          <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Days</p>
        </div>
        <div className="text-center">
          <p className="font-body font-bold text-lumi-text" style={{ fontSize: 16 }}>{lumi.energy}%</p>
          <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Energy</p>
        </div>
        <div className="text-center">
          <p className="font-body font-bold text-lumi-text" style={{ fontSize: 16 }}>{lumi.unlockedItems.length}</p>
          <p className="font-body text-lumi-muted" style={{ fontSize: 11 }}>Rewards</p>
        </div>
      </div>
    </div>
  );
}
