import type { Screen } from "../types";
import LumiAvatar from "./LumiAvatar";

interface SidebarProps {
  current: Screen;
  navigate: (screen: Screen) => void;
  darkMode: boolean;
}

const navItems = [
  {
    id: "dashboard" as Screen,
    label: "Home",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "checkin" as Screen,
    label: "Daily Check-in",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    id: "exercises" as Screen,
    label: "Exercises",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    id: "progress" as Screen,
    label: "Progress",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "journal" as Screen,
    label: "Journal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    id: "achievements" as Screen,
    label: "Achievements",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    id: "settings" as Screen,
    label: "Settings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

export default function Sidebar({ current, navigate, darkMode }: SidebarProps) {
  return (
    <aside
      className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 z-40 w-64"
      style={{
        background: darkMode ? "#1E1728" : "rgba(255,248,250,0.95)",
        borderRight: `1px solid rgba(216,143,168,0.12)`,
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-7">
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            width: 40,
            height: 40,
            background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path
              d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z"
              fill="white"
              opacity="0.9"
            />
            <circle cx="12" cy="10" r="2.5" fill="white" />
          </svg>
        </div>
        <div>
          <div
            className="font-display text-lumi-text"
            style={{ fontSize: 18, letterSpacing: "-0.01em" }}
          >
            Lumi
          </div>
          <div
            className="font-body text-lumi-muted"
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}
          >
            WELLNESS
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        {navItems.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 btn-press"
              style={{
                background: active ? "rgba(216,143,168,0.12)" : "transparent",
                color: active ? "#D88FA8" : "#7A7A7A",
                fontWeight: active ? 700 : 500,
              }}
            >
              {item.icon}
              <span className="font-body text-sm">{item.label}</span>
              {active && (
                <div
                  className="ml-auto w-1.5 h-1.5 rounded-full"
                  style={{ background: "#D88FA8" }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Lumi avatar at bottom */}
      <div className="px-6 py-6">
        <div
          className="rounded-3xl p-4 flex items-center gap-3"
          style={{
            background: "rgba(216,143,168,0.08)",
            border: "1px solid rgba(216,143,168,0.15)",
          }}
        >
          <LumiAvatar size="sm" animate={false} glow={false} />
          <div>
            <div
              className="font-body text-lumi-text font-semibold"
              style={{ fontSize: 13 }}
            >
              Lumi says
            </div>
            <div
              className="font-body text-lumi-muted"
              style={{ fontSize: 11, lineHeight: 1.4 }}
            >
              You're doing beautifully today. 🌸
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
