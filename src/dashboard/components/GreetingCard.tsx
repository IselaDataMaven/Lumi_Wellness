import type { WellnessScore, MotivationalQuote } from "../../types/dashboard";

interface GreetingCardProps {
  firstName: string;
  score: WellnessScore;
  quote: MotivationalQuote;
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export default function GreetingCard({ firstName, score, quote }: GreetingCardProps) {
  return (
    <div
      className="rounded-3xl p-5 overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, #FBF0F4 0%, #F5EDF9 50%, #EDF7F1 100%)",
        border: "1px solid rgba(216,143,168,0.12)",
      }}
    >
      {/* Decorative blob */}
      <div
        className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #CDB4DB, transparent)" }}
      />

      <div className="relative">
        <p className="font-body text-lumi-muted font-semibold" style={{ fontSize: 12 }}>
          {formatDate()}
        </p>
        <h1 className="font-display text-lumi-text mt-1" style={{ fontSize: 24 }}>
          {getGreeting()}, {firstName}
        </h1>

        {/* Wellness score */}
        <div className="flex items-center gap-3 mt-4">
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ width: 52, height: 52, background: "rgba(216,143,168,0.12)" }}
          >
            <span className="font-display text-lumi-rose" style={{ fontSize: 22 }}>{score.value}</span>
          </div>
          <div>
            <p className="font-body font-bold text-lumi-text" style={{ fontSize: 14 }}>Wellness Score</p>
            <p className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
              {score.trend === "up" ? "↑" : score.trend === "down" ? "↓" : "→"} {score.changePercent}% from last week
            </p>
          </div>
        </div>

        {/* Quote */}
        <p className="mt-4 font-body text-lumi-muted italic" style={{ fontSize: 13, lineHeight: 1.5 }}>
          "{quote.text}" — {quote.author}
        </p>
      </div>
    </div>
  );
}
