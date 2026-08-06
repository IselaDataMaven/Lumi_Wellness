import { useState, type InputHTMLAttributes } from "react";

interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

/**
 * Password input with show/hide toggle, accessible and reusable.
 */
export default function PasswordField({
  label,
  error,
  className = "",
  id,
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={inputId}
        className="block font-body font-semibold text-lumi-text mb-1.5"
        style={{ fontSize: 13 }}
      >
        {label}
      </label>
      <div className="relative">
        {/* Lock icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-lumi-muted pointer-events-none">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="18"
            height="18"
          >
            <rect x="4" y="9" width="12" height="9" rx="2" />
            <path d="M7 9V6a3 3 0 016 0v3" />
          </svg>
        </div>

        <input
          id={inputId}
          type={visible ? "text" : "password"}
          className="w-full rounded-2xl font-body text-lumi-text placeholder:text-lumi-muted/60 transition-all duration-200 focus:outline-none pl-11 pr-12"
          style={{
            height: 52,
            fontSize: 15,
            background: focused
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0.7)",
            border: error
              ? "1.5px solid #E8787A"
              : focused
                ? "1.5px solid #D88FA8"
                : "1.5px solid rgba(216,143,168,0.15)",
            boxShadow: focused
              ? "0 0 0 3px rgba(216,143,168,0.1)"
              : "none",
          }}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {/* Toggle visibility */}
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-lumi-muted hover:text-lumi-rose transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="18" height="18">
              <path d="M3 3l14 14" />
              <path d="M10 5c3.5 0 6.5 2.5 7.5 5a11.7 11.7 0 01-2.2 3M14 14.5A7.5 7.5 0 0110 15c-3.5 0-6.5-2.5-7.5-5a11.7 11.7 0 012.8-3.5" />
              <path d="M10 8a2 2 0 012 2" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="18" height="18">
              <ellipse cx="10" cy="10" rx="7.5" ry="5" />
              <circle cx="10" cy="10" r="2" />
            </svg>
          )}
        </button>
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 font-body text-[#E8787A]"
          style={{ fontSize: 12 }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
