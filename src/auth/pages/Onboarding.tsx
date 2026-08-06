import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthButton from "../../components/AuthButton";
import ProgressDots from "../../components/ProgressDots";

interface Slide {
  illustration: React.ReactNode;
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" width="180" height="180">
        <circle cx="100" cy="100" r="80" fill="rgba(216,143,168,0.08)" />
        <circle cx="100" cy="100" r="55" fill="rgba(216,143,168,0.06)" />
        {/* Flower */}
        <ellipse cx="100" cy="80" rx="12" ry="22" fill="#F0C5D5" opacity="0.8" />
        <ellipse cx="100" cy="80" rx="12" ry="22" fill="#F0C5D5" opacity="0.8" transform="rotate(60 100 80)" />
        <ellipse cx="100" cy="80" rx="12" ry="22" fill="#F0C5D5" opacity="0.8" transform="rotate(120 100 80)" />
        <circle cx="100" cy="80" r="8" fill="#D88FA8" />
        {/* Stem */}
        <path d="M100 92 Q100 130 95 155" stroke="#A8D5BA" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="90" cy="130" rx="8" ry="14" fill="#A8D5BA" opacity="0.6" transform="rotate(-20 90 130)" />
        <ellipse cx="108" cy="140" rx="7" ry="12" fill="#C8EDD8" opacity="0.6" transform="rotate(15 108 140)" />
        {/* Sparkles */}
        <circle cx="65" cy="60" r="3" fill="#F7E7A9" opacity="0.8" />
        <circle cx="140" cy="55" r="2.5" fill="#CDB4DB" opacity="0.7" />
        <circle cx="55" cy="120" r="2" fill="#A8D5BA" opacity="0.7" />
        <circle cx="145" cy="115" r="2.5" fill="#D88FA8" opacity="0.6" />
      </svg>
    ),
    title: "Every small step matters.",
    text: "Lumi helps you care for yourself one gentle step at a time.",
  },
  {
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" width="180" height="180">
        <circle cx="100" cy="100" r="80" fill="rgba(205,180,219,0.08)" />
        {/* Meditation figure */}
        <ellipse cx="100" cy="70" rx="16" ry="18" fill="#F5EDF9" stroke="#CDB4DB" strokeWidth="1.5" />
        <path d="M75 95 Q100 105 125 95 L130 135 Q100 145 70 135 Z" fill="#FBF0F4" stroke="#D88FA8" strokeWidth="1.5" />
        {/* Crossed legs */}
        <path d="M80 135 Q100 150 120 135" stroke="#CDB4DB" strokeWidth="6" strokeLinecap="round" />
        {/* Aura rings */}
        <circle cx="100" cy="100" r="50" stroke="#CDB4DB" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="100" cy="100" r="62" stroke="#A8D5BA" strokeWidth="0.8" fill="none" opacity="0.2" />
        <circle cx="100" cy="100" r="74" stroke="#F7E7A9" strokeWidth="0.6" fill="none" opacity="0.15" />
        {/* Particles */}
        <circle cx="55" cy="70" r="3" fill="#F7E7A9" opacity="0.8" />
        <circle cx="150" cy="75" r="2.5" fill="#D88FA8" opacity="0.6" />
        <circle cx="50" cy="130" r="2" fill="#A8D5BA" opacity="0.7" />
        <circle cx="152" cy="128" r="2.5" fill="#CDB4DB" opacity="0.7" />
      </svg>
    ),
    title: "Personalized wellness.",
    text: "Exercises and routines adapted to your needs.",
  },
  {
    illustration: (
      <svg viewBox="0 0 200 200" fill="none" width="180" height="180">
        <circle cx="100" cy="100" r="80" fill="rgba(168,213,186,0.08)" />
        {/* Rising path */}
        <path d="M40 150 Q60 135 80 125 Q100 115 110 100 Q120 85 140 70" stroke="url(#onbGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <defs>
          <linearGradient id="onbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8D5BA" />
            <stop offset="50%" stopColor="#CDB4DB" />
            <stop offset="100%" stopColor="#D88FA8" />
          </linearGradient>
        </defs>
        {/* Milestone dots */}
        <circle cx="40" cy="150" r="8" fill="#A8D5BA" />
        <circle cx="80" cy="125" r="8" fill="#CDB4DB" />
        <circle cx="110" cy="100" r="10" fill="#D88FA8" />
        {/* Star */}
        <path d="M140 58 L143 67 L152 67 L145 73 L148 82 L140 76 L132 82 L135 73 L128 67 L137 67Z" fill="#F7E7A9" />
        {/* Check marks */}
        <path d="M37 150 L39 152 L43 148" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M77 125 L79 127 L83 123" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M107 100 L109 102 L113 98" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Confetti */}
        <circle cx="60" cy="80" r="3" fill="#F7E7A9" opacity="0.8" />
        <circle cx="155" cy="100" r="2.5" fill="#F0C5D5" opacity="0.7" />
        <circle cx="75" cy="160" r="2" fill="#CDB4DB" opacity="0.6" />
      </svg>
    ),
    title: "Celebrate your journey.",
    text: "Track your achievements and build healthy habits.",
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const slide = slides[step];

  function handleNext() {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/auth/welcome");
    }
  }

  function handleSkip() {
    navigate("/auth/welcome");
  }

  return (
    <AuthLayout>
      {/* Skip button */}
      {step < slides.length - 1 && (
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 font-body font-semibold text-lumi-muted hover:text-lumi-rose transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded-lg px-2 py-1"
          style={{ fontSize: 14 }}
        >
          Skip
        </button>
      )}

      {/* Illustration */}
      <div
        className="flex items-center justify-center mb-8"
        key={step}
        style={{
          animation: "fadeSlideUp 0.4s ease forwards",
        }}
      >
        {slide.illustration}
      </div>

      {/* Text */}
      <div className="text-center mb-8" key={`text-${step}`}>
        <h2
          className="font-display text-lumi-text mb-3"
          style={{ fontSize: 26, lineHeight: 1.2 }}
        >
          {slide.title}
        </h2>
        <p
          className="font-body text-lumi-muted max-w-xs mx-auto"
          style={{ fontSize: 15, lineHeight: 1.6 }}
        >
          {slide.text}
        </p>
      </div>

      {/* Progress dots */}
      <ProgressDots total={slides.length} current={step} className="mb-8" />

      {/* Action button */}
      <div className="w-full max-w-xs">
        <AuthButton onClick={handleNext}>
          {step === slides.length - 1 ? "Get Started" : "Next"}
        </AuthButton>
      </div>

      {/* CSS animation keyframe (inline for self-contained component) */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </AuthLayout>
  );
}
