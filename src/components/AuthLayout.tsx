import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Full-screen layout wrapper for authentication pages.
 * Provides the soft gradient background and centered content area.
 */
export default function AuthLayout({ children, className = "" }: AuthLayoutProps) {
  return (
    <div
      className={`min-h-dvh flex flex-col items-center justify-center px-5 py-10 ${className}`}
      style={{
        background:
          "linear-gradient(160deg, #FFF8FA 0%, #F5EDF9 40%, #EDF7F1 80%, #FBF3CE 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="fixed top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(205,180,219,0.4) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="fixed bottom-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,213,186,0.35) 0%, transparent 70%)",
          transform: "translate(-20%, 20%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
