import type { Screen } from "../types";

interface BottomNavProps {
  current: Screen;
  navigate: (screen: Screen) => void;
}

const navItems = [
  {
    id: "dashboard" as Screen,
    label: "Home",
    icon: (active: boolean) => (
      <svg
        viewBox="0 0 24 24"
        fill={active ? "#D88FA8" : "none"}
        stroke={active ? "#D88FA8" : "#7A7A7A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "exercises" as Screen,
    label: "Move",
    icon: (active: boolean) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#D88FA8" : "#7A7A7A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path
          d="M6.5 9.5 C8 7 10 6 12 6"
          strokeOpacity={active ? "1" : "0.5"}
        />
      </svg>
    ),
  },
  {
    id: "checkin" as Screen,
    label: "Check In",
    icon: (active: boolean) => (
      <div
        className="flex items-center justify-center rounded-full shadow-lumi-md"
        style={{
          width: 52,
          height: 52,
          background: "linear-gradient(135deg, #D88FA8 0%, #CDB4DB 100%)",
          marginTop: -20,
          border: "3px solid #FFF8FA",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="22"
          height="22"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
    ),
  },
  {
    id: "progress" as Screen,
    label: "Progress",
    icon: (active: boolean) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#D88FA8" : "#7A7A7A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "journal" as Screen,
    label: "Journal",
    icon: (active: boolean) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#D88FA8" : "#7A7A7A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="13" y2="13" />
      </svg>
    ),
  },
];

export default function BottomNav({ current, navigate }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t"
      style={{
        borderColor: "rgba(216,143,168,0.12)",
        paddingBottom: "env(safe-area-inset-bottom)",
        maxWidth: "100%",
      }}
    >
      <div className="flex items-end justify-around px-2 pt-2 pb-2">
        {navItems.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="flex flex-col items-center gap-0.5 btn-press min-w-0 flex-1"
              style={{
                paddingTop: item.id === "checkin" ? 0 : 4,
                paddingBottom: 2,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{ height: item.id === "checkin" ? 52 : 28 }}
              >
                {item.icon(active)}
              </div>
              {item.id !== "checkin" && (
                <span
                  className="font-body text-center"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: active ? "#D88FA8" : "#7A7A7A",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
