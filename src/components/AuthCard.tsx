import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Glassmorphic card container for auth forms.
 * Provides consistent padding, radius, and soft shadow.
 */
export default function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <div
      className={`w-full rounded-3xl p-6 sm:p-8 ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow:
          "0 8px 32px rgba(216, 143, 168, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      {children}
    </div>
  );
}
