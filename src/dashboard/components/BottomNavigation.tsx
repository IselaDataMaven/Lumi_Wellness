import { useNavigate, useLocation } from "react-router-dom";
import type { NavTab } from "../../types/dashboard";

interface NavItem {
  id: NavTab;
  label: string;
  path: string;
  icon: (active: boolean) => React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/dashboard",
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill={active ? "#D88FA8" : "none"} stroke={active ? "#D88FA8" : "#7A7A7A"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "progress",
    label: "Progress",
    path: "/progress",
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={active ? "#D88FA8" : "#7A7A7A"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "Lumi AI",
    path: "/lumi-ai",
    icon: (active) => (
      <div
        className="flex items-center justify-center rounded-full -mt-4 shadow-lumi"
        style={{
          width: 50,
          height: 50,
          background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
          border: `3px solid ${active ? "#F5EDF9" : "#FFF8FA"}`,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" width="22" height="22">
          <path d="M12 2a7 7 0 017 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 017-7z" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      </div>
    ),
  },
  {
    id: "community",
    label: "Community",
    path: "/community",
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={active ? "#D88FA8" : "#7A7A7A"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    path: "/profile",
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={active ? "#D88FA8" : "#7A7A7A"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = navItems.find((item) => item.path === location.pathname)?.id ?? "home";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{
        background: "rgba(255,248,250,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(216,143,168,0.1)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-label="Main navigation"
    >
      <div className="flex items-end justify-around px-2 pt-2 pb-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-0.5 min-w-0 flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded-lg py-1"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="flex items-center justify-center" style={{ height: item.id === "ai" ? 50 : 28 }}>
                {item.icon(isActive)}
              </div>
              {item.id !== "ai" && (
                <span
                  className="font-body text-center"
                  style={{ fontSize: 10, fontWeight: 600, color: isActive ? "#D88FA8" : "#7A7A7A" }}
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
