import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import LoadingFallback from "../../components/ui/LoadingFallback";

const Splash = lazy(() => import("../pages/Splash"));
const Onboarding = lazy(() => import("../pages/Onboarding"));
const Welcome = lazy(() => import("../pages/Welcome"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const SetupProfile = lazy(() => import("../pages/SetupProfile"));

function Wrap({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

export const authRoutes: RouteObject[] = [
  {
    path: "/auth/splash",
    element: <Wrap><Splash /></Wrap>,
  },
  {
    path: "/auth/onboarding",
    element: <Wrap><Onboarding /></Wrap>,
  },
  {
    path: "/auth/welcome",
    element: <Wrap><Welcome /></Wrap>,
  },
  {
    path: "/auth/login",
    element: <Wrap><Login /></Wrap>,
  },
  {
    path: "/auth/register",
    element: <Wrap><Register /></Wrap>,
  },
  {
    path: "/auth/forgot-password",
    element: <Wrap><ForgotPassword /></Wrap>,
  },
  {
    path: "/auth/setup-profile",
    element: <Wrap><SetupProfile /></Wrap>,
  },
];
