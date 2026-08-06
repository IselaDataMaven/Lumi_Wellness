import { useLumi } from "../../hooks/useLumi";
import LumiAvatar from "../components/lumi/LumiAvatar";
import LumiGrowthCard from "../components/lumi/LumiGrowthCard";
import LumiMoodCard from "../components/lumi/LumiMoodCard";
import LumiMessageCard from "../components/lumi/LumiMessageCard";

export default function ProfilePage() {
  const { lumi, isLoading, careForLumi } = useLumi();

  if (isLoading || !lumi) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-lumi-gradient pb-24">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-lumi-rose/20 border-t-lumi-rose rounded-full animate-spin" />
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            Waking up Lumi...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-dvh pb-24 px-5 pt-14"
      style={{
        background: "linear-gradient(180deg, #FFF8FA 0%, #F5EDF9 100%)",
      }}
    >
      <div className="max-w-lg mx-auto space-y-5">
        {/* Header */}
        <div className="text-center">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 26 }}
          >
            Your Companion
          </h1>
          <p
            className="font-body text-lumi-muted mt-1"
            style={{ fontSize: 14 }}
          >
            {lumi.name} grows with every wellness action
          </p>
        </div>

        {/* Lumi Avatar */}
        <div className="flex justify-center py-4">
          <LumiAvatar stage={lumi.stage} mood={lumi.mood} size={140} />
        </div>

        {/* Care button */}
        <button
          onClick={careForLumi}
          className="w-full h-14 rounded-2xl font-body font-bold text-white shadow-lumi transition-all duration-200 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose focus-visible:ring-offset-2"
          style={{
            background: "linear-gradient(135deg, #D88FA8 0%, #CDB4DB 100%)",
            fontSize: 16,
          }}
        >
          Care for Lumi 💜
        </button>

        {/* Growth card */}
        <LumiGrowthCard lumi={lumi} />

        {/* Mood card */}
        <LumiMoodCard mood={lumi.mood} energy={lumi.energy} />

        {/* Message card */}
        <LumiMessageCard
          stage={lumi.stage}
          mood={lumi.mood}
          growthDays={lumi.growthDays}
        />
      </div>
    </div>
  );
}
