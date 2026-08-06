import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Splash screen — displays logo, app name, subtitle, and loading animation.
 * Automatically navigates to onboarding after 2 seconds.
 */
export default function Splash() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 100);
    const navTimer = setTimeout(() => navigate("/auth/onboarding"), 2000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(160deg, #F5EDF9 0%, #FBF0F4 35%, #EDF7F1 70%, #FBF3CE 100%)",
      }}
    >
      {/* Decorative rings */}
      <div
        className="absolute rounded-full animate-pulse"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(216,143,168,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full animate-pulse"
        style={{
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(205,180,219,0.15) 0%, transparent 70%)",
          animationDelay: "0.5s",
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center gap-6 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center rounded-3xl shadow-lumi-lg"
          style={{
            width: 88,
            height: 88,
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
            <path
              d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z"
              fill="white"
              opacity="0.9"
            />
            <circle cx="12" cy="10" r="2.5" fill="white" />
          </svg>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-1">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 38, letterSpacing: "-0.02em" }}
          >
            Lumi
          </h1>
          <span
            className="font-body uppercase font-semibold tracking-[0.25em]"
            style={{ fontSize: 11, color: "#D88FA8" }}
          >
            Wellness
          </span>
        </div>

        {/* Subtitle */}
        <div className="text-center mt-2">
          <p
            className="font-body text-lumi-muted italic"
            style={{ fontSize: 15, lineHeight: 1.6 }}
          >
            Small steps.
            <br />
            Meaningful progress.
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex items-center gap-1.5 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                background: "#D88FA8",
                animationDelay: `${i * 0.15}s`,
                animationDuration: "0.8s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
