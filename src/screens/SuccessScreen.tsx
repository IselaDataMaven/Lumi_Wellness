import { useNavigate } from "react-router-dom";

export default function SuccessScreen() {
  const navigate = useNavigate();
  const confetti = ["🌸", "⭐", "🌿", "💜", "🦋", "✨", "🌺", "💐"];

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center px-6 text-center"
      style={{
        background:
          "linear-gradient(160deg, #FBF0F4 0%, #F5EDF9 50%, #EDF7F1 100%)",
      }}
    >
      <div className="animate-scale-in flex flex-col items-center gap-6 max-w-sm">
        {/* Celebration ring */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute rounded-full animate-breathe-ring"
            style={{
              width: 160,
              height: 160,
              background:
                "radial-gradient(circle, rgba(216,143,168,0.2), transparent)",
            }}
          />
          <div
            className="rounded-full flex items-center justify-center shadow-lumi-lg animate-pulse-glow"
            style={{
              width: 110,
              height: 110,
              background: "linear-gradient(135deg, #FBF0F4, #F5EDF9)",
              border: "2px solid rgba(216,143,168,0.3)",
            }}
          >
            <span style={{ fontSize: 54 }}>🌸</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2
            className="font-display text-lumi-text mb-2"
            style={{ fontSize: 34 }}
          >
            Check-in saved!
          </h2>
          <p
            className="font-body text-lumi-muted"
            style={{ fontSize: 16, lineHeight: 1.7 }}
          >
            Taking a moment to check in with yourself is an act of courage and
            love. You're doing beautifully.
          </p>
        </div>

        {/* Confetti row */}
        <div className="flex gap-2 flex-wrap justify-center">
          {confetti.map((e, i) => (
            <span
              key={i}
              className="animate-bounce-gentle"
              style={{ fontSize: 22, animationDelay: `${i * 0.08}s` }}
            >
              {e}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={() => navigate("/exercises")}
            className="w-full flex items-center justify-center gap-2 rounded-2xl font-body font-bold btn-press shadow-lumi-md py-4"
            style={{
              background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
              color: "white",
              fontSize: 16,
            }}
          >
            Try a gentle exercise 🌿
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center justify-center gap-2 rounded-2xl font-body font-bold btn-press py-4"
            style={{
              background: "rgba(216,143,168,0.1)",
              border: "1.5px solid rgba(216,143,168,0.25)",
              color: "#D88FA8",
              fontSize: 16,
            }}
          >
            Return home
          </button>
        </div>
      </div>
    </div>
  );
}
