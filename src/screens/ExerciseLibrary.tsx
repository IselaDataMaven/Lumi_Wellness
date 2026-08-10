import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { useExercise } from "../app/context/ExerciseContext";
import { exercises } from "../data/exercises";

const categories = [
  "All",
  "Stretching",
  "Breathing",
  "Mindfulness",
  "Mobility",
  "Strength",
];
const difficultyColors = {
  Gentle: "#A8D5BA",
  Easy: "#CDB4DB",
  Moderate: "#D88FA8",
};

export default function ExerciseLibrary() {
  const navigate = useAppNavigate();
  const { setSelectedExercise } = useExercise();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [favOnly, setFavOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(
    new Set(exercises.filter((e) => e.isFavorite).map((e) => e.id)),
  );

  // Preselect category from query parameter
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const categoryMap: Record<string, string> = {
        meditation: "Mindfulness",
        stretch: "Stretching",
        breathing: "Breathing",
        mobility: "Mobility",
        strength: "Strength",
      };
      const mapped = categoryMap[categoryParam.toLowerCase()];
      if (mapped) setFilter(mapped);
    }
  }, [searchParams]);

  const filtered = exercises.filter((ex) => {
    const matchCat = filter === "All" || ex.category === filter;
    const matchSearch =
      ex.title.toLowerCase().includes(search.toLowerCase()) ||
      ex.bodyArea.toLowerCase().includes(search.toLowerCase());
    const matchFav = !favOnly || favorites.has(ex.id);
    return matchCat && matchSearch && matchFav;
  });

  function toggleFav(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-lumi-gradient pb-28 lg:pb-8 lg:pl-64">
      {/* Header */}
      <div className="px-5 pt-14 lg:pt-8 pb-4">
        <div className="flex items-center justify-between mb-5">
          <h1
            className="font-display text-lumi-text"
            style={{ fontSize: 30, letterSpacing: "-0.01em" }}
          >
            Exercises
          </h1>
          <button
            onClick={() => setFavOnly(!favOnly)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl font-body font-bold btn-press transition-all"
            style={{
              background: favOnly
                ? "rgba(216,143,168,0.2)"
                : "rgba(216,143,168,0.08)",
              border: `1.5px solid ${favOnly ? "#D88FA8" : "rgba(216,143,168,0.2)"}`,
              color: favOnly ? "#D88FA8" : "#7A7A7A",
              fontSize: 13,
            }}
          >
            <svg
              viewBox="0 0 20 20"
              fill={favOnly ? "#D88FA8" : "none"}
              stroke={favOnly ? "#D88FA8" : "#7A7A7A"}
              strokeWidth="2"
              width="16"
              height="16"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            Favourites
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="#7A7A7A"
              strokeWidth="2"
              strokeLinecap="round"
              width="18"
              height="18"
            >
              <circle cx="9" cy="9" r="6" />
              <path d="M15 15l4 4" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search exercises…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl pl-11 pr-4 font-body text-lumi-text placeholder:text-lumi-muted"
            style={{
              height: 50,
              background: "rgba(255,255,255,0.8)",
              border: "1.5px solid rgba(216,143,168,0.15)",
              fontSize: 15,
              outline: "none",
            }}
          />
        </div>

        {/* Category chips */}
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="shrink-0 px-4 py-2 rounded-2xl font-body font-bold btn-press transition-all duration-200"
              style={{
                fontSize: 13,
                background:
                  filter === cat
                    ? "linear-gradient(135deg, #D88FA8, #CDB4DB)"
                    : "rgba(255,255,255,0.8)",
                color: filter === cat ? "white" : "#7A7A7A",
                border:
                  filter === cat
                    ? "none"
                    : "1.5px solid rgba(216,143,168,0.15)",
                boxShadow:
                  filter === cat ? "0 4px 12px rgba(216,143,168,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-5">
        {filtered.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4" style={{ fontSize: 64 }}>
              🌿
            </div>
            <h3
              className="font-display text-lumi-text mb-2"
              style={{ fontSize: 22 }}
            >
              Nothing here yet
            </h3>
            <p
              className="font-body text-lumi-muted max-w-xs"
              style={{ fontSize: 15, lineHeight: 1.6 }}
            >
              Try a different search or category. Your perfect exercise is
              waiting for you.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
            {filtered.map((ex) => (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedExercise(ex);
                  navigate("exercise-detail");
                }}
                className="w-full glass rounded-3xl overflow-hidden shadow-lumi card-hover btn-press text-left"
              >
                {/* Card top */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: 120,
                    background: `linear-gradient(135deg, ${ex.bgColor} 0%, ${ex.color}22 100%)`,
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    className="absolute right-4 top-4 rounded-full opacity-30"
                    style={{ width: 60, height: 60, background: ex.color }}
                  />
                  <div
                    className="absolute left-8 bottom-2 rounded-full opacity-20"
                    style={{ width: 40, height: 40, background: ex.color }}
                  />
                  <span
                    style={{ fontSize: 52, position: "relative", zIndex: 1 }}
                  >
                    {ex.category === "Breathing"
                      ? "🌬️"
                      : ex.category === "Mindfulness"
                        ? "🧘"
                        : ex.category === "Mobility"
                          ? "🤸"
                          : ex.category === "Strength"
                            ? "💪"
                            : "🌸"}
                  </span>
                  {/* Fav button */}
                  <button
                    onClick={(e) => toggleFav(ex.id, e)}
                    className="absolute top-3 right-3 flex items-center justify-center rounded-full btn-press"
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill={favorites.has(ex.id) ? "#D88FA8" : "none"}
                      stroke="#D88FA8"
                      strokeWidth="2"
                      width="16"
                      height="16"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <div
                    className="font-body font-bold text-lumi-text mb-1"
                    style={{ fontSize: 16 }}
                  >
                    {ex.title}
                  </div>
                  <div
                    className="font-body text-lumi-muted mb-3"
                    style={{ fontSize: 13, lineHeight: 1.4 }}
                  >
                    {ex.description.slice(0, 60)}…
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="px-2.5 py-1 rounded-xl font-body font-bold"
                      style={{
                        fontSize: 11,
                        background: `${difficultyColors[ex.difficulty]}25`,
                        color: difficultyColors[ex.difficulty],
                      }}
                    >
                      {ex.difficulty}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-xl font-body font-bold"
                      style={{
                        fontSize: 11,
                        background: "rgba(216,143,168,0.1)",
                        color: "#D88FA8",
                      }}
                    >
                      ⏱ {ex.duration} min
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-xl font-body font-bold"
                      style={{
                        fontSize: 11,
                        background: "rgba(205,180,219,0.15)",
                        color: "#9A7BB0",
                      }}
                    >
                      {ex.bodyArea}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
