import { useNavigate } from "react-router-dom";
import type { Screen } from "../types";

const screenToPath: Record<Screen, string> = {
  splash: "/splash",
  onboarding: "/onboarding",
  dashboard: "/dashboard",
  checkin: "/checkin",
  exercises: "/exercises",
  "exercise-detail": "/exercises/detail",
  "exercise-player": "/exercises/play",
  progress: "/progress",
  journal: "/journal",
  achievements: "/progress/achievements",
  settings: "/settings",
  success: "/checkin/success",
};

export function useAppNavigate() {
  const navigate = useNavigate();

  return (screen: Screen) => {
    const path = screenToPath[screen];
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
