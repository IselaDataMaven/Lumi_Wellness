import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import LoadingFallback from "../../components/ui/LoadingFallback";

const HomeDashboard = lazy(() => import("../pages/HomeDashboard"));

function Wrap({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Wrap><HomeDashboard /></Wrap>,
  },
];
