import { useState } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";

const moods = ["😔", "😕", "😐", "🙂", "😊"];
const moodLabels = ["Rough", "Low", "Okay", "Good", "Great"];
const tags = [
  "Grateful",
  "Tired",
  "Hopeful",
  "Pain flare",
  "Good day",
  "Reflective",
  "Anxious",
  "Calm",
  "Proud",
];

const pastEntries = [
  {
    id: "1",
    date: "Aug 3",
    mood: 4,
    tags: ["Grateful", "Hopeful"],
    preview:
      "Today was a gentle day. The morning stretch helped a lot with my shoulders...",
  },
  {
    id: "2",
    date: "Aug 2",
    mood: 3,
    tags: ["Tired", "Reflective"],
    preview:
      "Slept poorly but tried to be kind to myself. Did the breathing exercise...",
  },
  {
    id: "3",
    date: "Aug 1",
    mood: 4,
    tags: ["Calm", "Good day"],
    preview:
      "First day using Lumi. Feeling cautiously optimistic about building new habits...",
  },
];

const calDays = [
  null,
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
const hasEntry = new Set([1, 2, 3]);

export default function JournalScreen() {
  const navigate = useAppNavigate();
  const [mood, setMood] = useState(3);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const [view, setView] = useState<"write" | "past">("write");

  function toggleTag(t: string) {
    setSelectedTags((prev) => {
      const n = new Set(prev);
      n.has(t) ? n.delete(t) : n.add(t);
      return n;
    });
  }

  function handleSave() {
    if (!text.trim()) return;
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setText("");
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-lumi-gradient pb-28 lg:pb-8 lg:pl-64">
      <div className="px-5 pt-14 lg:pt-8 max-w-2xl mx-auto lg:mx-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 30, letterSpacing: "-0.01em" }}
          >
            Journal
          </h1>
          <div
            className="flex gap-1 p-1 rounded-2xl"
            style={{ background: "rgba(216,143,168,0.08)" }}
          >
            {(["write", "past"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="px-4 py-1.5 rounded-xl font-body font-bold btn-press transition-all"
                style={{
                  fontSize: 13,
                  background: view === v ? "white" : "transparent",
                  color: view === v ? "#D88FA8" : "#7A7A7A",
                  boxShadow:
                    view === v ? "0 1px 6px rgba(216,143,168,0.2)" : "none",
                }}
              >
                {v === "write" ? "Today" : "Past entries"}
              </button>
            ))}
          </div>
        </div>

        {view === "write" ? (
          <div className="space-y-4">
            {/* Date */}
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 20 }}>📅</span>
              <span
                className="font-body font-semibold text-lumi-muted"
                style={{ fontSize: 14 }}
              >
                {new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </div>

            {/* Mood */}
            <div className="glass rounded-3xl p-5 shadow-lumi">
              <p
                className="font-body font-bold text-lumi-muted mb-3"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                How are you feeling?
              </p>
              <div className="flex gap-2">
                {moods.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setMood(i)}
                    className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl btn-press transition-all"
                    style={{
                      background:
                        mood === i
                          ? "rgba(216,143,168,0.15)"
                          : "rgba(255,255,255,0.5)",
                      border: `2px solid ${mood === i ? "#D88FA8" : "transparent"}`,
                      transform: mood === i ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <span style={{ fontSize: 26 }}>{m}</span>
                    <span
                      className="font-body font-semibold"
                      style={{
                        fontSize: 10,
                        color: mood === i ? "#D88FA8" : "#7A7A7A",
                      }}
                    >
                      {moodLabels[i]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="glass rounded-3xl p-5 shadow-lumi">
              <p
                className="font-body font-bold text-lumi-muted mb-3"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Add tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className="px-3.5 py-2 rounded-2xl font-body font-bold btn-press transition-all"
                    style={{
                      fontSize: 13,
                      background: selectedTags.has(t)
                        ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                        : "rgba(216,143,168,0.08)",
                      color: selectedTags.has(t) ? "white" : "#7A7A7A",
                      border: `1.5px solid ${selectedTags.has(t) ? "transparent" : "rgba(216,143,168,0.15)"}`,
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Text area */}
            <div className="glass rounded-3xl p-5 shadow-lumi">
              <p
                className="font-body font-bold text-lumi-muted mb-3"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Today's reflection
              </p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write freely… there are no rules here. What is on your heart today?"
                className="w-full font-body text-lumi-text placeholder:text-lumi-muted resize-none"
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  minHeight: 140,
                }}
              />
              <div
                className="flex items-center justify-between mt-3 pt-3"
                style={{ borderTop: "1px solid rgba(216,143,168,0.1)" }}
              >
                <span
                  className="font-body text-lumi-muted"
                  style={{ fontSize: 12 }}
                >
                  {text.length} characters
                </span>
                <span
                  className="font-body text-lumi-muted"
                  style={{ fontSize: 12 }}
                >
                  ✨ Free writing
                </span>
              </div>
            </div>

            {/* Save */}
            <button
              onClick={handleSave}
              disabled={!text.trim()}
              className="w-full flex items-center justify-center gap-2 rounded-2xl font-body font-bold btn-press shadow-lumi-md transition-all"
              style={{
                height: 58,
                fontSize: 17,
                background: text.trim()
                  ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                  : "rgba(216,143,168,0.2)",
                color: text.trim() ? "white" : "#D88FA8",
                opacity: text.trim() ? 1 : 0.6,
              }}
            >
              {saved ? "✨ Saved!" : "Save Entry 📓"}
            </button>
          </div>
        ) : (
          /* Past entries */
          <div className="space-y-4">
            {/* Mini calendar */}
            <div className="glass rounded-3xl p-5 shadow-lumi">
              <p
                className="font-body font-bold text-lumi-muted mb-3"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                August 2025
              </p>
              <div className="grid grid-cols-7 gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div
                    key={i}
                    className="text-center font-body font-bold text-lumi-muted"
                    style={{ fontSize: 10, paddingBottom: 4 }}
                  >
                    {d}
                  </div>
                ))}
                {calDays.map((d, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-xl ${d ? "btn-press" : ""}`}
                    style={{
                      background:
                        d && hasEntry.has(d)
                          ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                          : "transparent",
                    }}
                  >
                    {d && (
                      <span
                        className="font-body font-semibold"
                        style={{
                          fontSize: 11,
                          color: hasEntry.has(d)
                            ? "white"
                            : d === 4
                              ? "#D88FA8"
                              : "#7A7A7A",
                        }}
                      >
                        {d}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Entry cards */}
            {pastEntries.map((entry) => (
              <div
                key={entry.id}
                className="glass rounded-3xl p-5 shadow-lumi card-hover"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: 24 }}>{moods[entry.mood]}</span>
                    <div>
                      <div
                        className="font-body font-bold text-lumi-text"
                        style={{ fontSize: 15 }}
                      >
                        {moodLabels[entry.mood]}
                      </div>
                      <div
                        className="font-body text-lumi-muted"
                        style={{ fontSize: 12 }}
                      >
                        {entry.date}
                      </div>
                    </div>
                  </div>
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
                </div>
                <p
                  className="font-body text-lumi-muted mb-3"
                  style={{ fontSize: 14, lineHeight: 1.5 }}
                >
                  {entry.preview}
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {entry.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-xl font-body font-bold"
                      style={{
                        fontSize: 11,
                        background: "rgba(216,143,168,0.1)",
                        color: "#D88FA8",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Empty state prompt */}
            <div className="flex flex-col items-center text-center py-6">
              <span style={{ fontSize: 40 }}>📝</span>
              <p
                className="font-body text-lumi-muted mt-2"
                style={{ fontSize: 14, lineHeight: 1.6 }}
              >
                Keep writing — your story matters.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
