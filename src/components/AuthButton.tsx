import type { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
  fullWidth?: boolean;
}

/**
 * Reusable button for auth flows.
 * Supports primary (gradient), secondary (outlined), and ghost variants.
 */
export default function AuthButton({
  children,
  variant = "primary",
  isLoading = false,
  fullWidth = true,
  className = "",
  disabled,
  ...props
}: AuthButtonProps) {
  const baseClasses =
    "relative flex items-center justify-center gap-2 rounded-2xl font-body font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose focus-visible:ring-offset-2";

  const sizeClasses = `${fullWidth ? "w-full" : ""} h-14 px-6 text-base`;

  const variantStyles: Record<string, string> = {
    primary: "text-white shadow-lumi",
    secondary:
      "text-lumi-rose bg-transparent border-[1.5px] border-lumi-rose/25 hover:bg-lumi-rose-pale/50",
    ghost: "text-lumi-muted hover:text-lumi-rose hover:bg-lumi-rose-pale/30",
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantStyles[variant]} ${isDisabled ? "opacity-60 cursor-not-allowed" : "active:scale-[0.97]"} ${className}`}
      style={
        variant === "primary"
          ? {
              background: isDisabled
                ? "rgba(216,143,168,0.4)"
                : "linear-gradient(135deg, #D88FA8 0%, #CDB4DB 100%)",
            }
          : undefined
      }
      disabled={isDisabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
          aria-label="Loading"
        />
      ) : (
        children
      )}
    </button>
  );
}
