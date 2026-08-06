import type { DashboardUser } from "../../types/dashboard";

interface DashboardHeaderProps {
  user: DashboardUser;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-5 py-4"
      style={{
        background: "rgba(255,248,250,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="flex items-center justify-center rounded-full shadow-lumi shrink-0"
          style={{
            width: 42,
            height: 42,
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
          }}
        >
          <span className="font-display text-white" style={{ fontSize: 18 }}>
            {user.firstName.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-body text-lumi-muted font-semibold" style={{ fontSize: 11, letterSpacing: "0.03em" }}>
            Level {user.level} · 🔥 {user.streakDays} days
          </p>
          <p className="font-display text-lumi-text" style={{ fontSize: 18 }}>
            {user.firstName}
          </p>
        </div>
      </div>

      {/* Notification bell */}
      <button
        className="relative flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-lumi-rose-pale focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
        aria-label="Notifications"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#7A7A7A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-lumi-rose" />
      </button>
    </header>
  );
}
