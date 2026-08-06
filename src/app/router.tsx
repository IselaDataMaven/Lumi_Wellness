import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import FullscreenLayout from "./layouts/FullscreenLayout";
import LoadingFallback from "../components/ui/LoadingFallback";
import { authRoutes } from "../auth/routes/AuthRoutes";

// Lazy-loaded screens — Main app
const HomeDashboard = lazy(() => import("../dashboard/pages/HomeDashboard"));
const ExerciseLibrary = lazy(() => import("../screens/ExerciseLibrary"));
const ExerciseDetail = lazy(() => import("../screens/ExerciseDetail"));
const ExercisePlayer = lazy(() => import("../screens/ExercisePlayer"));
const ProgressScreen = lazy(() => import("../screens/ProgressScreen"));
const AchievementsScreen = lazy(() => import("../screens/AchievementsScreen"));
const JournalScreen = lazy(() => import("../screens/JournalScreen"));
const SettingsScreen = lazy(() => import("../screens/SettingsScreen"));
const DailyCheckin = lazy(() => import("../screens/DailyCheckin"));
const SuccessScreen = lazy(() => import("../screens/SuccessScreen"));

// New dashboard pages
const LumiAIPage = lazy(() => import("../dashboard/pages/LumiAIPage"));
const CommunityPage = lazy(() => import("../dashboard/pages/CommunityPage"));
const ProfilePage = lazy(() => import("../dashboard/pages/ProfilePage"));

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // Root redirect → auth splash
      {
        path: "/",
        element: <Navigate to="/auth/splash" replace />,
      },

      // ─── Auth routes (fullscreen, no nav) ───
      ...authRoutes,

      // ─── Main application routes ───
      // Dashboard has its own nav built-in
      {
        path: "/dashboard",
        element: <SuspenseWrapper><HomeDashboard /></SuspenseWrapper>,
      },

      // Other app screens get BottomNavigation via MainLayout
      {
        element: <MainLayout />,
        children: [
          {
            path: "/exercises",
            element: <SuspenseWrapper><ExerciseLibrary /></SuspenseWrapper>,
          },
          {
            path: "/progress",
            element: <SuspenseWrapper><ProgressScreen /></SuspenseWrapper>,
          },
          {
            path: "/progress/achievements",
            element: <SuspenseWrapper><AchievementsScreen /></SuspenseWrapper>,
          },
          {
            path: "/journal",
            element: <SuspenseWrapper><JournalScreen /></SuspenseWrapper>,
          },
          {
            path: "/settings",
            element: <SuspenseWrapper><SettingsScreen /></SuspenseWrapper>,
          },
          {
            path: "/lumi-ai",
            element: <SuspenseWrapper><LumiAIPage /></SuspenseWrapper>,
          },
          {
            path: "/community",
            element: <SuspenseWrapper><CommunityPage /></SuspenseWrapper>,
          },
          {
            path: "/profile",
            element: <SuspenseWrapper><ProfilePage /></SuspenseWrapper>,
          },
        ],
      },

      // ─── Fullscreen routes (no nav chrome) ───
      {
        element: <FullscreenLayout />,
        children: [
          {
            path: "/checkin",
            element: <SuspenseWrapper><DailyCheckin /></SuspenseWrapper>,
          },
          {
            path: "/checkin/success",
            element: <SuspenseWrapper><SuccessScreen /></SuspenseWrapper>,
          },
          {
            path: "/exercises/detail",
            element: <SuspenseWrapper><ExerciseDetail /></SuspenseWrapper>,
          },
          {
            path: "/exercises/play",
            element: <SuspenseWrapper><ExercisePlayer /></SuspenseWrapper>,
          },
        ],
      },
    ],
  },
]);
