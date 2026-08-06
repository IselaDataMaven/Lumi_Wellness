import { useTheme } from "./context/ThemeContext";
import { Outlet } from "react-router-dom";

/**
 * App shell — wraps the entire application with theme styles.
 * The old src/App.tsx is preserved as a temporary reference during migration.
 * This component applies dark mode styling to the root container.
 */
export default function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={darkMode ? "dark" : ""}
      style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}
    >
      <div
        style={{
          minHeight: "100dvh",
          background: darkMode ? "#1A1520" : "#FFF8FA",
          color: darkMode ? "#F0E8EE" : "#2D2D2D",
          transition: "background 0.4s ease, color 0.4s ease",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
