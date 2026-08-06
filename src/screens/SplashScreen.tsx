import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LumiAvatar from "../components/LumiAvatar";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  size: 3 + Math.random() * 6,
  color: ["#D88FA8", "#CDB4DB", "#A8D5BA", "#F7E7A9", "#F0C5D5"][
    Math.floor(Math.random() * 5)
  ],
}));

export default function SplashScreen() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    setTimeout(() => setFadeOut(true), 3200);
    setTimeout(() => navigate("/onboarding"), 3700);
  }, [navigate]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-lumi-splash"
      style={{
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        zIndex: 100,
      }}
    >
      {/* Animated particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: `${10 + Math.random() * 30}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.6,
            animation: `particle-rise ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Background organic blobs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(205,180,219,0.25) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, rgba(168,213,186,0.2) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(216,143,168,0.18) 0%, transparent 70%)",
          top: "40%",
          left: "60%",
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center gap-8"
        style={{
          transition:
            "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {/* Logo mark */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{
              transform: "scale(1.8)",
              background:
                "radial-gradient(circle, rgba(216,143,168,0.2) 0%, transparent 70%)",
            }}
          />
          <LumiAvatar size="xl" glow={true} animate={true} />
        </div>

        {/* Brand name */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 42, letterSpacing: "-0.02em", lineHeight: 1 }}
          >
            Lumi
          </h1>
          <div
            className="font-body uppercase tracking-widest font-semibold"
            style={{ fontSize: 12, color: "#D88FA8", letterSpacing: "0.25em" }}
          >
            Wellness
          </div>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-lumi-muted text-center max-w-xs"
          style={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.6,
            fontStyle: "italic",
          }}
        >
          Your gentle wellness companion
        </p>

        {/* Decorative dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 1 ? 20 : 6,
                height: 6,
                background: i === 1 ? "#D88FA8" : "rgba(216,143,168,0.3)",
                transition: "width 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom branding */}
      <div
        className="absolute bottom-12 font-body text-lumi-muted"
        style={{
          fontSize: 11,
          letterSpacing: "0.04em",
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1s ease 0.8s",
        }}
      >
        Made with care · 2025
      </div>
    </div>
  );
}
