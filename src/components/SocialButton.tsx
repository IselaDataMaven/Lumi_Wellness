import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  isLoading?: boolean;
}

/**
 * Social login button (Google, Apple, etc.)
 * Displays an icon and label with consistent styling.
 */
export default function SocialButton({
  icon,
  label,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: SocialButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`w-full flex items-center justify-center gap-3 h-14 rounded-2xl font-body font-semibold text-lumi-text transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose focus-visible:ring-offset-2 ${isDisabled ? "opacity-60 cursor-not-allowed" : "active:scale-[0.97] hover:shadow-lumi"} ${className}`}
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1.5px solid rgba(216,143,168,0.12)",
        fontSize: 15,
      }}
      disabled={isDisabled}
      aria-label={label}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-lumi-rose/30 border-t-lumi-rose rounded-full animate-spin" />
      ) : (
        <>
          <span className="flex items-center justify-center w-5 h-5">
            {icon}
          </span>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
