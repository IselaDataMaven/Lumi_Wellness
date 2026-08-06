import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthCard from "../../components/AuthCard";
import AuthButton from "../../components/AuthButton";
import ProgressDots from "../../components/ProgressDots";
import { useAuth } from "../../hooks/useAuth";

const AGE_RANGES = ["18-24", "25-34", "35-44", "45+"];
const GOALS = ["Reduce Pain", "Reduce Stress", "Improve Sleep", "Improve Mobility", "Reduce Anxiety", "Feel Better"];
const DAILY_TIMES = [5, 10, 15, 20];
const ACTIVITIES = ["Stretching", "Breathing", "Meditation", "Mobility", "Mindfulness", "Strength"];

export default function SetupProfile() {
  const navigate = useNavigate();
  const { updateProfile, isLoading } = useAuth();
  const [step, setStep] = useState(0);
  const [ageRange, setAgeRange] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [dailyTime, setDailyTime] = useState(10);
  const [activities, setActivities] = useState<string[]>([]);
  const totalSteps = 4;

  function toggleActivity(a: string) {
    setActivities((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);
  }
  function canProceed(): boolean {
    switch (step) {
      case 0: return !!ageRange;
      case 1: return !!mainGoal;
      case 2: return true;
      case 3: return activities.length > 0;
      default: return false;
    }
  }
  async function handleNext() {
    if (step < totalSteps - 1) { setStep(step + 1); }
    else {
      const success = await updateProfile({ ageRange, mainGoal, dailyTime, preferredActivities: activities });
      if (success) navigate("/dashboard");
    }
  }
  function handleBack() { if (step > 0) setStep(step - 1); }

  return (
    <AuthLayout>
      <ProgressDots total={totalSteps} current={step} className="mb-6" />
      <AuthCard className="w-full">
        {step === 0 && (
          <div>
            <h2 className="font-display text-lumi-text text-center mb-2" style={{ fontSize: 24 }}>What's your age range?</h2>
            <p className="font-body text-lumi-muted text-center mb-6" style={{ fontSize: 14 }}>This helps us personalize your experience.</p>
            <div className="grid grid-cols-2 gap-3">
              {AGE_RANGES.map((range) => (
                <button key={range} onClick={() => setAgeRange(range)}
                  className="rounded-2xl py-4 font-body font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
                  style={{ fontSize: 15, background: ageRange === range ? "linear-gradient(135deg, #D88FA8, #CDB4DB)" : "rgba(255,255,255,0.7)", color: ageRange === range ? "white" : "#2D2D2D", border: ageRange === range ? "none" : "1.5px solid rgba(216,143,168,0.15)", boxShadow: ageRange === range ? "0 4px 16px rgba(216,143,168,0.25)" : "none" }}
                >{range}</button>
              ))}
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="font-display text-lumi-text text-center mb-2" style={{ fontSize: 24 }}>What's your main goal?</h2>
            <p className="font-body text-lumi-muted text-center mb-6" style={{ fontSize: 14 }}>We'll focus your journey on what matters most.</p>
            <div className="grid grid-cols-2 gap-3">
              {GOALS.map((goal) => (
                <button key={goal} onClick={() => setMainGoal(goal)}
                  className="rounded-2xl py-3.5 px-3 font-body font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
                  style={{ fontSize: 14, background: mainGoal === goal ? "linear-gradient(135deg, #D88FA8, #CDB4DB)" : "rgba(255,255,255,0.7)", color: mainGoal === goal ? "white" : "#2D2D2D", border: mainGoal === goal ? "none" : "1.5px solid rgba(216,143,168,0.15)", boxShadow: mainGoal === goal ? "0 4px 16px rgba(216,143,168,0.25)" : "none" }}
                >{goal}</button>
              ))}
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="font-display text-lumi-text text-center mb-2" style={{ fontSize: 24 }}>How much time per day?</h2>
            <p className="font-body text-lumi-muted text-center mb-6" style={{ fontSize: 14 }}>Even 5 minutes makes a difference.</p>
            <div className="grid grid-cols-4 gap-3">
              {DAILY_TIMES.map((t) => (
                <button key={t} onClick={() => setDailyTime(t)}
                  className="rounded-2xl py-4 font-body font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose flex flex-col items-center gap-1"
                  style={{ fontSize: 13, background: dailyTime === t ? "linear-gradient(135deg, #D88FA8, #CDB4DB)" : "rgba(255,255,255,0.7)", color: dailyTime === t ? "white" : "#2D2D2D", border: dailyTime === t ? "none" : "1.5px solid rgba(216,143,168,0.15)", boxShadow: dailyTime === t ? "0 4px 16px rgba(216,143,168,0.25)" : "none" }}
                >
                  <span style={{ fontSize: 20 }}>{t === 20 ? "20+" : t}</span>
                  <span style={{ fontSize: 11, opacity: 0.8 }}>min</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="font-display text-lumi-text text-center mb-2" style={{ fontSize: 24 }}>What interests you?</h2>
            <p className="font-body text-lumi-muted text-center mb-6" style={{ fontSize: 14 }}>Select all that feel right for you.</p>
            <div className="grid grid-cols-2 gap-3">
              {ACTIVITIES.map((a) => {
                const sel = activities.includes(a);
                return (
                  <button key={a} onClick={() => toggleActivity(a)}
                    className="rounded-2xl py-3.5 px-3 font-body font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
                    style={{ fontSize: 14, background: sel ? "linear-gradient(135deg, #D88FA8, #CDB4DB)" : "rgba(255,255,255,0.7)", color: sel ? "white" : "#2D2D2D", border: sel ? "none" : "1.5px solid rgba(216,143,168,0.15)", boxShadow: sel ? "0 4px 16px rgba(216,143,168,0.25)" : "none" }}
                    aria-pressed={sel}
                  >{a}</button>
                );
              })}
            </div>
          </div>
        )}
        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          {step > 0 && (
            <AuthButton variant="secondary" onClick={handleBack} fullWidth={false} className="flex-1">
              Back
            </AuthButton>
          )}
          <AuthButton
            onClick={handleNext}
            isLoading={isLoading}
            disabled={!canProceed()}
            fullWidth={step === 0}
            className={step > 0 ? "flex-1" : ""}
          >
            {step === totalSteps - 1 ? "Finish Setup" : "Continue"}
          </AuthButton>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
