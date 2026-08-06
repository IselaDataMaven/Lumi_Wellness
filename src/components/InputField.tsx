import { useState, type InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

/**
 * Reusable text input with floating-style label, icon support, and error state.
 */
export default function InputField({
  label,
  error,
  icon,
  className = "",
  id,
  ...props
}: InputFieldProps) {
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
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-lumi-muted pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`w-full rounded-2xl font-body text-lumi-text placeholder:text-lumi-muted/60 transition-all duration-200 focus:outline-none ${icon ? "pl-11" : "pl-4"} pr-4`}
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
