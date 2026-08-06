import { useState, useEffect } from "react";
import { useWellness } from "../../hooks/useWellness";
import { useLumi } from "../../hooks/useLumi";
import { useDashboard } from "../../hooks/useDashboard";
import type { LumiMood } from "../../types/lumi";
import MoodSelector from "../../components/wellness/MoodSelector";
import SleepTracker from "../../components/wellness/SleepTracker";
import WaterTracker from "../../components/wellness/WaterTracker";
import EnergySlider from "../../components/wellness/EnergySlider";
import StressSlider from "../../components/wellness/StressSlider";

const CHECKIN_XP = 25;

/**
 * Derive Lumi's mood from the user's wellness state.
 */
function deriveLumiMood(energy: number, stress: number, mood: number): LumiMood {
  if (energy >= 7 && stress <= 3) return "happy";
  if (energy <= 3) return "tired";
  if (stress >= 7) return "tired";
  if (mood >= 5) return "excited";
  return "calm";
}

export default function DailyCheckInPage() {
  const { checkIn, isLoading, save } = useWellness();
  const { gainExperience, updateMood: updateLumiMood } = useLumi();
  const { refresh: refreshDashboard } = useDashboard();

  // Local state owned by the page
  const [mood, setMood] = useState(3);
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepMinutes, setSleepMinutes] = useState(0);
  const [sleepQuality, setSleepQuality] = useState<"poor" | "fair" | "good" | "excellent">("good");
  const [waterCurrent, setWaterCurrent] = useState(0);
  const [waterGoal] = useState(8);
  const [energy, setEnergy] = useState(5);
  const [stress, setStress] = useState(3);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Populate from loaded check-in data
  useEffect(() => {
    if (checkIn) {
      setMood(checkIn.mood.value);
      setSleepHours(checkIn.sleep.hours);
      setSleepMinutes(checkIn.sleep.minutes);
      setSleepQuality(checkIn.sleep.quality);
      setWaterCurrent(checkIn.water.current);
      setEnergy(checkIn.energy.value);
      setStress(checkIn.stress.value);
    }
  }, [checkIn]);

  async function handleSave() {
    setIsSaving(true);
    setSaved(false);
    const success = await save();
    if (success) {
      // Award Lumi XP
      await gainExperience(CHECKIN_XP);

      // Update Lumi mood based on wellness state
      const lumiMood = deriveLumiMood(energy, stress, mood);
      await updateLumiMood(lumiMood);

      // Refresh dashboard data
      await refreshDashboard();

      // Show success
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }
    setIsSaving(false);
  }

  const todayFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  if (isLoading && !checkIn) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-lumi-gradient pb-24">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-lumi-rose/20 border-t-lumi-rose rounded-full animate-spin" />
          <p className="font-body text-lumi-muted" style={{ fontSize: 14 }}>
            Preparing your check-in...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-dvh pb-32 px-5 pt-14"
      style={{ background: "linear-gradient(180deg, #FFF8FA 0%, #F5EDF9 100%)" }}
    >
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <header className="mb-6">
          <p className="font-body text-lumi-muted font-semibold" style={{ fontSize: 12 }}>
            {todayFormatted}
          </p>
          <h1 className="font-display text-lumi-text mt-1" style={{ fontSize: 26 }}>
            Daily Check-In
          </h1>
          <p className="font-body text-lumi-muted mt-1" style={{ fontSize: 14, lineHeight: 1.5 }}>
            Take a gentle moment to notice how you're feeling today.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-6">
          {/* Mood */}
          <Section title="How are you feeling?" icon="💜">
            <MoodSelector value={mood} onChange={setMood} />
          </Section>

          {/* Sleep */}
          <Section title="How did you sleep?" icon="🌙">
            <SleepTracker
              hours={sleepHours}
              minutes={sleepMinutes}
              quality={sleepQuality}
              goal={8}
              onHoursChange={setSleepHours}
              onMinutesChange={setSleepMinutes}
            />
          </Section>

          {/* Water */}
          <Section title="Water intake" icon="💧">
            <WaterTracker
              current={waterCurrent}
              goal={waterGoal}
              onAdd={() => setWaterCurrent((v) => Math.min(v + 1, waterGoal))}
              onRemove={() => setWaterCurrent((v) => Math.max(v - 1, 0))}
            />
          </Section>

          {/* Energy */}
          <Section title="Energy level" icon="⚡">
            <EnergySlider value={energy} onChange={setEnergy} />
          </Section>

          {/* Stress */}
          <Section title="Stress level" icon="🧠">
            <StressSlider value={stress} onChange={setStress} />
          </Section>
        </div>
      </div>

      {/* Sticky save bar */}
      <div
        className="fixed bottom-0 left-0 right-0 px-5 pb-6 pt-4 z-40"
        style={{
          background: "linear-gradient(to top, rgba(255,248,250,0.97) 70%, transparent)",
        }}
      >
        <div className="max-w-lg mx-auto">
          {saved && (
            <div
              className="mb-3 rounded-2xl p-3 text-center font-body font-semibold animate-slide-up"
              style={{
                fontSize: 13,
                background: "rgba(168,213,186,0.15)",
                color: "#3E8B5E",
                border: "1px solid rgba(168,213,186,0.3)",
              }}
              role="alert"
            >
              <span className="block">Check-in saved! +{CHECKIN_XP} XP for Lumi 🌱</span>
              <span className="block mt-1 text-lumi-muted" style={{ fontSize: 12 }}>
                Thank you for caring for yourself today. 🌸
              </span>
            </div>
          )}
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full h-14 rounded-2xl font-body font-bold text-white shadow-lumi transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose focus-visible:ring-offset-2"
            style={{
              background: isSaving
                ? "rgba(216,143,168,0.5)"
                : "linear-gradient(135deg, #D88FA8, #CDB4DB)",
              fontSize: 16,
            }}
            aria-busy={isSaving}
          >
            {isSaving ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </span>
            ) : (
              "Save Check-In"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Section wrapper ──────────────────────────────── */

interface SectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

function Section({ title, icon, children }: SectionProps) {
  return (
    <section
      className="rounded-3xl p-5"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "0 4px 24px rgba(216,143,168,0.08)",
      }}
      aria-label={title}
    >
      <div className="flex items-center gap-2 mb-4">
        <span style={{ fontSize: 18 }}>{icon}</span>
        <h2 className="font-body font-bold text-lumi-text" style={{ fontSize: 15 }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
