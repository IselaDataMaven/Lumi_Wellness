import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthCard from "../../components/AuthCard";
import AuthButton from "../../components/AuthButton";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();
  const { register, isLoading, error, clearError } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [localError, setLocalError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocalError("");

    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }
    if (!acceptPolicy) {
      setLocalError("Please accept the Privacy Policy.");
      return;
    }

    const success = await register({ firstName, lastName, email, password });
    if (success) navigate("/auth/setup-profile");
  }

  const displayError = localError || error;

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

      <h1 className="font-display text-lumi-text text-center mb-1" style={{ fontSize: 28 }}>
        Create your account
      </h1>
      <p className="font-body text-lumi-muted text-center mb-6" style={{ fontSize: 14 }}>
        Begin your wellness journey with Lumi.
      </p>

      <AuthCard>
        <form onSubmit={handleSubmit} className="space-y-4">
          {displayError && (
            <div
              className="rounded-2xl p-3 text-center font-body"
              style={{ fontSize: 13, background: "rgba(232,120,122,0.08)", color: "#E8787A", border: "1px solid rgba(232,120,122,0.2)" }}
              role="alert"
            >
              {displayError}
              <button type="button" onClick={() => { clearError(); setLocalError(""); }} className="ml-2 font-bold hover:underline">×</button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <InputField label="First Name" placeholder="Sofia" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <InputField label="Last Name" placeholder="Wellness" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>

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

          <PasswordField label="Password" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
          <PasswordField label="Confirm Password" placeholder="Re-enter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" required />

          {/* Privacy policy */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptPolicy}
              onChange={(e) => setAcceptPolicy(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-lumi-rose/30 text-lumi-rose focus:ring-lumi-rose/30"
            />
            <span className="font-body text-lumi-muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
              I accept the <a href="#" className="text-lumi-rose font-semibold hover:underline">Privacy Policy</a> and{" "}
              <a href="#" className="text-lumi-rose font-semibold hover:underline">Terms of Service</a>.
            </span>
          </label>

          <AuthButton type="submit" isLoading={isLoading} disabled={!acceptPolicy}>
            Create Account
          </AuthButton>
        </form>
      </AuthCard>

      <p className="mt-5 font-body text-lumi-muted text-center" style={{ fontSize: 14 }}>
        Already have an account?{" "}
        <Link to="/auth/login" className="font-bold text-lumi-rose hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
