import { useState } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { useTheme } from "../app/context/ThemeContext";
import LumiAvatar from "../components/LumiAvatar";

function Toggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="btn-press transition-all duration-300"
      style={{
        width: 52,
        height: 30,
        borderRadius: 15,
        background: value
          ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
          : "rgba(216,143,168,0.2)",
        position: "relative",
        flexShrink: 0,
      }}
      role="switch"
      aria-checked={value}
    >
      <div
        style={{
          position: "absolute",
          top: 3,
          left: value ? 25 : 3,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          transition: "left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />
    </button>
  );
}

function SettingRow({
  icon,
  label,
  description,
  value,
  onChange,
}: {
  icon: string;
  label: string;
  description?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      className="flex items-center gap-3 py-4"
      style={{ borderBottom: "1px solid rgba(216,143,168,0.08)" }}
    >
      <div
        className="flex items-center justify-center rounded-2xl shrink-0"
        style={{ width: 44, height: 44, background: "rgba(216,143,168,0.08)" }}
      >
        <span style={{ fontSize: 22 }}>{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-body font-semibold text-lumi-text"
          style={{ fontSize: 15 }}
        >
          {label}
        </div>
        {description && (
          <div
            className="font-body text-lumi-muted"
            style={{ fontSize: 12, lineHeight: 1.4 }}
          >
            {description}
          </div>
        )}
      </div>
      <Toggle value={value} onChange={onChange} />
    </div>
  );
}

function NavRow({
  icon,
  label,
  description,
  badge,
  onClick,
}: {
  icon: string;
  label: string;
  description?: string;
  badge?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-4 btn-press text-left"
      style={{ borderBottom: "1px solid rgba(216,143,168,0.08)" }}
    >
      <div
        className="flex items-center justify-center rounded-2xl shrink-0"
        style={{ width: 44, height: 44, background: "rgba(216,143,168,0.08)" }}
      >
        <span style={{ fontSize: 22 }}>{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-body font-semibold text-lumi-text"
          style={{ fontSize: 15 }}
        >
          {label}
        </div>
        {description && (
          <div className="font-body text-lumi-muted" style={{ fontSize: 12 }}>
            {description}
          </div>
        )}
      </div>
      {badge && (
        <span
          className="px-2 py-1 rounded-xl font-body font-bold"
          style={{
            fontSize: 11,
            background: "rgba(168,213,186,0.25)",
            color: "#3E8B5E",
          }}
        >
          {badge}
        </span>
      )}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="#CDB4DB"
        strokeWidth="2"
        strokeLinecap="round"
        width="14"
        height="14"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </button>
  );
}

export default function SettingsScreen() {
  const navigate = useAppNavigate();
  const { darkMode, setDarkMode } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [haptics, setHaptics] = useState(true);
  const [reminderMorning, setReminderMorning] = useState(true);
  const [reminderEvening, setReminderEvening] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  return (
    <div className="min-h-screen bg-lumi-gradient pb-28 lg:pb-8 lg:pl-64">
      <div className="px-5 pt-14 lg:pt-8 max-w-2xl mx-auto lg:mx-0">
        {/* Header */}
        <h1
          className="font-display text-lumi-text mb-6"
          style={{ fontSize: 30, letterSpacing: "-0.01em" }}
        >
          Settings
        </h1>

        {/* Profile card */}
        <div
          className="relative rounded-3xl p-5 mb-5 overflow-hidden shadow-lumi-md"
          style={{
            background: "linear-gradient(135deg, #FBF0F4 0%, #F5EDF9 100%)",
            border: "1px solid rgba(216,143,168,0.12)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="rounded-full overflow-hidden shadow-lumi shrink-0"
              style={{
                width: 64,
                height: 64,
                background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="font-display text-white"
                style={{ fontSize: 28 }}
              >
                S
              </span>
            </div>
            <div className="flex-1">
              <div
                className="font-display text-lumi-text"
                style={{ fontSize: 20 }}
              >
                Sofia
              </div>
              <div
                className="font-body text-lumi-muted"
                style={{ fontSize: 13 }}
              >
                Member since August 2025
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span style={{ fontSize: 14 }}>🔥</span>
                <span
                  className="font-body font-bold"
                  style={{ fontSize: 12, color: "#D88FA8" }}
                >
                  5 day streak
                </span>
              </div>
            </div>
            <LumiAvatar size="sm" glow={false} animate={false} />
          </div>
        </div>

        {/* Appearance */}
        <div className="glass rounded-3xl px-5 mb-4 shadow-lumi">
          <p
            className="font-body font-bold text-lumi-muted pt-4 pb-1"
            style={{
              fontSize: 11,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            Appearance
          </p>
          <SettingRow
            icon="🌙"
            label="Dark Mode"
            description="Easier on the eyes at night"
            value={darkMode}
            onChange={setDarkMode}
          />
          <SettingRow
            icon="🔤"
            label="Large Text"
            description="Increases text size throughout the app"
            value={largeText}
            onChange={setLargeText}
          />
          <SettingRow
            icon="🎨"
            label="High Contrast"
            description="Improves readability"
            value={highContrast}
            onChange={setHighContrast}
          />
          <div className="py-2" />
        </div>

        {/* Notifications */}
        <div className="glass rounded-3xl px-5 mb-4 shadow-lumi">
          <p
            className="font-body font-bold text-lumi-muted pt-4 pb-1"
            style={{
              fontSize: 11,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            Notifications
          </p>
          <SettingRow
            icon="🔔"
            label="Push Notifications"
            description="Daily reminders and tips"
            value={notifications}
            onChange={setNotifications}
          />
          <SettingRow
            icon="🌅"
            label="Morning Reminder"
            description="8:00 AM gentle nudge"
            value={reminderMorning}
            onChange={setReminderMorning}
          />
          <SettingRow
            icon="🌙"
            label="Evening Wind-down"
            description="9:00 PM reminder to rest"
            value={reminderEvening}
            onChange={setReminderEvening}
          />
          <div className="py-2" />
        </div>

        {/* Experience */}
        <div className="glass rounded-3xl px-5 mb-4 shadow-lumi">
          <p
            className="font-body font-bold text-lumi-muted pt-4 pb-1"
            style={{
              fontSize: 11,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            Experience
          </p>
          <SettingRow
            icon="🔊"
            label="Sounds"
            description="Gentle audio cues during exercises"
            value={sounds}
            onChange={setSounds}
          />
          <SettingRow
            icon="📳"
            label="Haptic Feedback"
            description="Gentle vibrations on interactions"
            value={haptics}
            onChange={setHaptics}
          />
          <SettingRow
            icon="🎭"
            label="Reduce Motion"
            description="Fewer animations throughout the app"
            value={reduceMotion}
            onChange={setReduceMotion}
          />
          <div className="py-2" />
        </div>

        {/* About */}
        <div className="glass rounded-3xl px-5 mb-4 shadow-lumi">
          <p
            className="font-body font-bold text-lumi-muted pt-4 pb-1"
            style={{
              fontSize: 11,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            About
          </p>
          <NavRow icon="🌐" label="Language" description="English" />
          <NavRow
            icon="🔒"
            label="Privacy & Data"
            description="Manage your personal data"
          />
          <NavRow icon="📋" label="Terms of Service" />
          <NavRow icon="❤️" label="Rate Lumi" badge="🌸 Love it?" />
          <NavRow icon="💌" label="Send Feedback" />
          <div className="py-2" />
        </div>

        {/* Version */}
        <div className="flex flex-col items-center py-6 gap-2">
          <LumiAvatar size="sm" glow animate />
          <p
            className="font-body text-lumi-muted text-center"
            style={{ fontSize: 12 }}
          >
            Lumi Wellness · Version 1.0.0 · Made with 💜
          </p>
          <p
            className="font-body text-lumi-muted text-center"
            style={{ fontSize: 11 }}
          >
            Remember: Lumi is a wellness companion, not a medical device. Always
            consult your healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}
