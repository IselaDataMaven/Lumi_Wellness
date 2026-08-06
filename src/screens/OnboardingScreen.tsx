import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 0,
    title: "Understanding\nyour body",
    subtitle:
      "Your body holds wisdom. We help you listen gently, without judgment or pressure.",
    color: "#D88FA8",
    bgFrom: "#FBF0F4",
    bgTo: "#F5EDF9",
    illustration: () => (
      <svg
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        style={{ maxWidth: 300 }}
      >
        {/* Soft background circle */}
        <circle cx="140" cy="130" r="110" fill="rgba(216,143,168,0.08)" />
        <circle cx="140" cy="130" r="80" fill="rgba(216,143,168,0.06)" />
        {/* Body silhouette - gentle */}
        <ellipse
          cx="140"
          cy="85"
          rx="28"
          ry="32"
          fill="#F5EDF9"
          stroke="#CDB4DB"
          strokeWidth="1.5"
        />
        <path
          d="M112 115 C105 130 102 160 108 185 L132 185 L136 155 L144 155 L148 185 L172 185 C178 160 175 130 168 115 Z"
          fill="#FBF0F4"
          stroke="#D88FA8"
          strokeWidth="1.5"
        />
        {/* Heart glow */}
        <ellipse
          cx="140"
          cy="145"
          rx="18"
          ry="16"
          fill="rgba(216,143,168,0.15)"
        />
        <path
          d="M140 155 C140 155 128 148 128 140 C128 135 133 131 140 138 C147 131 152 135 152 140 C152 148 140 155 140 155Z"
          fill="#D88FA8"
          opacity="0.7"
        />
        {/* Floating leaves around */}
        <ellipse
          cx="80"
          cy="100"
          rx="10"
          ry="18"
          fill="#A8D5BA"
          opacity="0.7"
          transform="rotate(-25 80 100)"
        />
        <ellipse
          cx="200"
          cy="95"
          rx="10"
          ry="18"
          fill="#CDB4DB"
          opacity="0.7"
          transform="rotate(25 200 95)"
        />
        <ellipse
          cx="70"
          cy="155"
          rx="8"
          ry="14"
          fill="#A8D5BA"
          opacity="0.5"
          transform="rotate(15 70 155)"
        />
        <ellipse
          cx="210"
          cy="160"
          rx="8"
          ry="14"
          fill="#D88FA8"
          opacity="0.5"
          transform="rotate(-15 210 160)"
        />
        {/* Stars */}
        <circle cx="88" cy="60" r="3" fill="#F7E7A9" opacity="0.9" />
        <circle cx="195" cy="55" r="4" fill="#F7E7A9" opacity="0.8" />
        <circle cx="60" cy="130" r="2.5" fill="#CDB4DB" opacity="0.8" />
        <circle cx="220" cy="120" r="2.5" fill="#A8D5BA" opacity="0.8" />
        {/* Small flowers */}
        <circle cx="105" cy="75" r="5" fill="#F0C5D5" opacity="0.7" />
        <circle cx="175" cy="78" r="5" fill="#C8EDD8" opacity="0.7" />
        {/* Dotted connection lines */}
        <path
          d="M140 117 L140 131"
          stroke="#D88FA8"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          opacity="0.5"
        />
        {/* Pulse rings */}
        <circle
          cx="140"
          cy="145"
          r="24"
          stroke="#D88FA8"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <circle
          cx="140"
          cy="145"
          r="32"
          stroke="#D88FA8"
          strokeWidth="0.5"
          fill="none"
          opacity="0.15"
        />
      </svg>
    ),
  },
  {
    id: 1,
    title: "Gentle movement\nheals",
    subtitle:
      "Small, tender movements are powerful medicine. Every gentle step forward counts.",
    color: "#A8D5BA",
    bgFrom: "#EDF7F1",
    bgTo: "#F5EDF9",
    illustration: () => (
      <svg
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        style={{ maxWidth: 300 }}
      >
        <circle cx="140" cy="130" r="110" fill="rgba(168,213,186,0.08)" />
        {/* Figure in gentle stretch */}
        <ellipse
          cx="140"
          cy="72"
          rx="22"
          ry="24"
          fill="#EDF7F1"
          stroke="#A8D5BA"
          strokeWidth="1.5"
        />
        {/* Body */}
        <path
          d="M120 96 Q140 108 160 96 L165 145 Q140 152 115 145 Z"
          fill="#F5EDF9"
          stroke="#CDB4DB"
          strokeWidth="1.5"
        />
        {/* Arms raised gently */}
        <path
          d="M120 100 Q98 88 86 78"
          stroke="#A8D5BA"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M160 100 Q182 88 194 78"
          stroke="#A8D5BA"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Legs */}
        <path
          d="M126 145 L120 185"
          stroke="#CDB4DB"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M154 145 L160 185"
          stroke="#CDB4DB"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Smile on face */}
        <path
          d="M133 75 Q140 80 147 75"
          stroke="#C47A9A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="135" cy="70" r="2" fill="#4A3860" opacity="0.7" />
        <circle cx="145" cy="70" r="2" fill="#4A3860" opacity="0.7" />
        {/* Floating petals/leaves */}
        <ellipse
          cx="78"
          cy="78"
          rx="9"
          ry="16"
          fill="#A8D5BA"
          opacity="0.6"
          transform="rotate(-40 78 78)"
        />
        <ellipse
          cx="202"
          cy="78"
          rx="9"
          ry="16"
          fill="#A8D5BA"
          opacity="0.6"
          transform="rotate(40 202 78)"
        />
        {/* Energy sparkles */}
        <path
          d="M75 110 L78 105 L81 110 L78 115Z"
          fill="#F7E7A9"
          opacity="0.8"
        />
        <path
          d="M200 108 L203 103 L206 108 L203 113Z"
          fill="#F7E7A9"
          opacity="0.8"
        />
        <circle cx="92" cy="65" r="3" fill="#D88FA8" opacity="0.7" />
        <circle cx="188" cy="65" r="3" fill="#D88FA8" opacity="0.7" />
        {/* Ground flowers */}
        <circle cx="105" cy="200" r="6" fill="#F0C5D5" opacity="0.8" />
        <circle cx="140" cy="205" r="5" fill="#C8EDD8" opacity="0.8" />
        <circle cx="175" cy="200" r="6" fill="#F7E7A9" opacity="0.8" />
        <path
          d="M105 200 L105 215"
          stroke="#A8D5BA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M140 205 L140 218"
          stroke="#A8D5BA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M175 200 L175 215"
          stroke="#A8D5BA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Soft arc ground */}
        <path
          d="M70 220 Q140 210 210 220"
          stroke="#C8EDD8"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Small progress\nmatters most",
    subtitle:
      "Every tiny step is a victory. We celebrate each moment of courage, no matter how small.",
    color: "#CDB4DB",
    bgFrom: "#F5EDF9",
    bgTo: "#EDF7F1",
    illustration: () => (
      <svg
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        style={{ maxWidth: 300 }}
      >
        <circle cx="140" cy="130" r="110" fill="rgba(205,180,219,0.08)" />
        {/* Rising path */}
        <path
          d="M60 200 Q80 185 100 175 Q120 165 130 150 Q140 135 155 120 Q165 108 180 95"
          stroke="url(#pathGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8D5BA" />
            <stop offset="50%" stopColor="#CDB4DB" />
            <stop offset="100%" stopColor="#D88FA8" />
          </linearGradient>
        </defs>
        {/* Milestone dots */}
        <circle cx="60" cy="200" r="8" fill="#A8D5BA" opacity="0.9" />
        <circle cx="100" cy="175" r="8" fill="#C8EDD8" opacity="0.9" />
        <circle cx="140" cy="145" r="10" fill="#CDB4DB" opacity="0.9" />
        <circle cx="180" cy="95" r="12" fill="#D88FA8" opacity="0.9" />
        {/* Check marks */}
        <path
          d="M56 200 L59 203 L64 197"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96 175 L99 178 L104 172"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M136 145 L139 148 L145 141"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Star at top */}
        <path
          d="M180 80 L183 89 L192 89 L185 95 L188 104 L180 98 L172 104 L175 95 L168 89 L177 89Z"
          fill="#F7E7A9"
          opacity="0.95"
        />
        {/* Floating elements */}
        <circle cx="90" cy="120" r="4" fill="#F7E7A9" opacity="0.7" />
        <circle cx="165" cy="155" r="3" fill="#F0C5D5" opacity="0.7" />
        {/* Butterflies */}
        <path
          d="M70 145 Q65 138 72 136 Q79 134 74 141Z"
          fill="#CDB4DB"
          opacity="0.7"
        />
        <path
          d="M70 145 Q75 138 68 136 Q61 134 66 141Z"
          fill="#E8D8F0"
          opacity="0.7"
        />
        <path
          d="M210 170 Q205 163 212 161 Q219 159 214 166Z"
          fill="#D88FA8"
          opacity="0.6"
        />
        <path
          d="M210 170 Q215 163 208 161 Q201 159 206 166Z"
          fill="#F0C5D5"
          opacity="0.6"
        />
        {/* Flower */}
        <circle cx="230" cy="130" r="7" fill="#F0C5D5" opacity="0.8" />
        <circle cx="230" cy="130" r="4" fill="#D88FA8" opacity="0.8" />
        {/* Tiny hearts */}
        <path
          d="M120 95 C120 95 115 90 115 87 C115 84 120 82 120 87 C120 82 125 84 125 87 C125 90 120 95 120 95Z"
          fill="#D88FA8"
          opacity="0.6"
          scale="0.6"
        />
        <path
          d="M200 145 C200 145 196 141 196 139 C196 137 200 135 200 139 C200 135 204 137 204 139 C204 141 200 145 200 145Z"
          fill="#CDB4DB"
          opacity="0.6"
        />
      </svg>
    ),
  },
];

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const slide = slides[step];

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${slide.bgFrom} 0%, ${slide.bgTo} 100%)`,
        transition: "background 0.5s ease",
      }}
    >
      {/* Skip */}
      <div className="flex justify-end px-6 pt-14">
        {step < 2 && (
          <button
            onClick={() => navigate("/dashboard")}
            className="font-body text-lumi-muted font-semibold btn-press"
            style={{ fontSize: 14 }}
          >
            Skip
          </button>
        )}
      </div>

      {/* Illustration */}
      <div
        className="flex-1 flex items-center justify-center px-8 animate-fade-in"
        key={step}
      >
        <slide.illustration />
      </div>

      {/* Content card */}
      <div
        className="glass rounded-t-3xl px-8 pt-8 pb-10"
        style={{ borderBottom: "none", minHeight: 300 }}
      >
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setStep(i)} className="btn-press">
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === step ? 24 : 8,
                  height: 8,
                  background:
                    i === step ? slide.color : "rgba(216,143,168,0.25)",
                }}
              />
            </button>
          ))}
        </div>

        <div key={`text-${step}`} className="animate-slide-up">
          <h2
            className="font-display text-lumi-text mb-3"
            style={{ fontSize: 32, lineHeight: 1.2, whiteSpace: "pre-line" }}
          >
            {slide.title}
          </h2>
          <p
            className="font-body text-lumi-muted mb-8"
            style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 400 }}
          >
            {slide.subtitle}
          </p>
        </div>

        {step < 2 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="w-full flex items-center justify-center gap-2 font-body font-bold rounded-2xl btn-press shadow-lumi-md"
            style={{
              height: 58,
              fontSize: 17,
              background: `linear-gradient(135deg, ${slide.color} 0%, #CDB4DB 100%)`,
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            Continue
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="18"
              height="18"
            >
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center justify-center gap-2 font-body font-bold rounded-2xl btn-press shadow-lumi-lg"
            style={{
              height: 58,
              fontSize: 17,
              background: "linear-gradient(135deg, #D88FA8 0%, #CDB4DB 100%)",
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            Get Started
            <span style={{ fontSize: 20 }}>🌸</span>
          </button>
        )}
      </div>
    </div>
  );
}
