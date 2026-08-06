import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthCard from "../../components/AuthCard";
import AuthButton from "../../components/AuthButton";
import InputField from "../../components/InputField";
import { useAuth } from "../../hooks/useAuth";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const { forgotPassword, isLoading, error, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = await forgotPassword(email);
    if (success) setSent(true);
  }

  return (
    <AuthLayout>
      {/* Back */}
      <button
        onClick={() => navigate("/auth/login")}
        className="self-start mb-6 flex items-center gap-2 font-body font-semibold text-lumi-muted hover:text-lumi-rose transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded-lg px-1 py-1"
        style={{ fontSize: 14 }}
        aria-label="Back to login"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
          <path d="M15 10H5M10 15l-5-5 5-5" />
        </svg>
        Back
      </button>

      {sent ? (
        <div className="flex flex-col items-center text-center gap-4">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 80,
              height: 80,
              background: "rgba(168,213,186,0.15)",
              border: "2px solid rgba(168,213,186,0.3)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#A8D5BA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <h2 className="font-display text-lumi-text" style={{ fontSize: 26 }}>
            Recovery email sent
          </h2>
          <p className="font-body text-lumi-muted max-w-xs" style={{ fontSize: 14, lineHeight: 1.6 }}>
            We've sent a password recovery link to <strong>{email}</strong>. Check your inbox.
          </p>
          <AuthButton onClick={() => navigate("/auth/login")} className="mt-4 max-w-xs">
            Return to Sign In
          </AuthButton>
        </div>
      ) : (
        <>
          <h1 className="font-display text-lumi-text text-center mb-1" style={{ fontSize: 28 }}>
            Forgot your password?
          </h1>
          <p className="font-body text-lumi-muted text-center mb-6 max-w-xs" style={{ fontSize: 14, lineHeight: 1.6 }}>
            Enter your email. We'll send you a recovery link.
          </p>

          <AuthCard>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div
                  className="rounded-2xl p-3 text-center font-body"
                  style={{ fontSize: 13, background: "rgba(232,120,122,0.08)", color: "#E8787A", border: "1px solid rgba(232,120,122,0.2)" }}
                  role="alert"
                >
                  {error}
                  <button type="button" onClick={clearError} className="ml-2 font-bold hover:underline">×</button>
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
                    <rect x="2" y="4" width="16" height="12" rx="2" /><path d="M2 6l8 5 8-5" />
                  </svg>
                }
              />

              <AuthButton type="submit" isLoading={isLoading}>
                Send Link
              </AuthButton>
            </form>
          </AuthCard>
        </>
      )}
    </AuthLayout>
  );
}
