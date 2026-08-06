import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthCard from "../../components/AuthCard";
import AuthButton from "../../components/AuthButton";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = await login({ email, password, remember });
    if (success) navigate("/dashboard");
  }

  return (
    <AuthLayout>
      {/* Back */}
      <button
        onClick={() => navigate("/auth/welcome")}
        className="self-start mb-6 flex items-center gap-2 font-body font-semibold text-lumi-muted hover:text-lumi-rose transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded-lg px-1 py-1"
        style={{ fontSize: 14 }}
        aria-label="Back to welcome"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
          <path d="M15 10H5M10 15l-5-5 5-5" />
        </svg>
        Back
      </button>

      {/* Header */}
      <h1
        className="font-display text-lumi-text text-center mb-1"
        style={{ fontSize: 28 }}
      >
        Welcome back
      </h1>
      <p
        className="font-body text-lumi-muted text-center mb-6"
        style={{ fontSize: 14 }}
      >
        Sign in to continue your journey.
      </p>

      <AuthCard>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error message */}
          {error && (
            <div
              className="rounded-2xl p-3 text-center font-body"
              style={{
                fontSize: 13,
                background: "rgba(232,120,122,0.08)",
                color: "#E8787A",
                border: "1px solid rgba(232,120,122,0.2)",
              }}
              role="alert"
            >
              {error}
              <button
                type="button"
                onClick={clearError}
                className="ml-2 font-bold hover:underline"
              >
                ×
              </button>
            </div>
          )}

          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            icon={
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="18" height="18">
                <rect x="2" y="4" width="16" height="12" rx="2" />
                <path d="M2 6l8 5 8-5" />
              </svg>
            }
          />

          <PasswordField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-lumi-rose/30 text-lumi-rose focus:ring-lumi-rose/30"
              />
              <span className="font-body text-lumi-muted" style={{ fontSize: 13 }}>
                Remember me
              </span>
            </label>
            <Link
              to="/auth/forgot-password"
              className="font-body font-semibold text-lumi-rose hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded"
              style={{ fontSize: 13 }}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <AuthButton type="submit" isLoading={isLoading}>
            Sign In
          </AuthButton>
        </form>
      </AuthCard>

      {/* Bottom link */}
      <p className="mt-5 font-body text-lumi-muted text-center" style={{ fontSize: 14 }}>
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="font-bold text-lumi-rose hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded"
        >
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
}
