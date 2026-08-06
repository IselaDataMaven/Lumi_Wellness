import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthCard from "../../components/AuthCard";
import AuthButton from "../../components/AuthButton";
import SocialButton from "../../components/SocialButton";
import { useAuth } from "../../hooks/useAuth";

/**
 * Welcome page — main entry point for authentication.
 * Offers social login, email/password, and guest options.
 */
export default function Welcome() {
  const navigate = useNavigate();
  const { loginWithGoogle, loginWithApple, loginAsGuest, isLoading } = useAuth();

  async function handleGoogle() {
    const success = await loginWithGoogle();
    if (success) navigate("/dashboard");
  }

  async function handleApple() {
    const success = await loginWithApple();
    if (success) navigate("/dashboard");
  }

  function handleGuest() {
    loginAsGuest();
    navigate("/dashboard");
  }

  return (
    <AuthLayout>
      {/* Logo */}
      <div
        className="flex items-center justify-center rounded-3xl shadow-lumi-lg mb-4"
        style={{
          width: 72,
          height: 72,
          background: "linear-gradient(135deg, #D88FA8, #CDB4DB)",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
          <path
            d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z"
            fill="white"
            opacity="0.9"
          />
          <circle cx="12" cy="10" r="2.5" fill="white" />
        </svg>
      </div>

      {/* Title */}
      <h1
        className="font-display text-lumi-text mb-1 text-center"
        style={{ fontSize: 30 }}
      >
        Welcome to Lumi
      </h1>
      <p
        className="font-body text-lumi-muted text-center mb-6"
        style={{ fontSize: 15 }}
      >
        Your wellness journey starts today.
      </p>

      <AuthCard className="w-full">
        {/* Social buttons */}
        <div className="space-y-3 mb-5">
          <SocialButton
            icon={
              <svg viewBox="0 0 20 20" width="18" height="18">
                <path d="M19.6 10.2c0-.7-.1-1.4-.2-2H10v3.8h5.4a4.6 4.6 0 01-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" fill="#4285F4" />
                <path d="M10 20c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H1.1v2.6A10 10 0 0010 20z" fill="#34A853" />
                <path d="M4.4 12c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V5.4H1.1A10 10 0 000 10c0 1.6.4 3.2 1.1 4.6l3.3-2.6z" fill="#FBBC05" />
                <path d="M10 4c1.5 0 2.8.5 3.8 1.5l2.9-2.8A10 10 0 0010 0 10 10 0 001.1 5.4l3.3 2.6C5.2 5.8 7.4 4 10 4z" fill="#EA4335" />
              </svg>
            }
            label="Continue with Google"
            onClick={handleGoogle}
            isLoading={isLoading}
          />
          <SocialButton
            icon={
              <svg viewBox="0 0 20 20" width="18" height="18" fill="#000">
                <path d="M15.2 10.6c0-1.5.7-2.8 1.8-3.7a5.3 5.3 0 00-4.2-2.3c-1.8-.2-3.4 1-4.3 1s-2.3-1-3.8-1a5.6 5.6 0 00-4.7 2.9c-2 3.5-.5 8.6 1.4 11.5 1 1.4 2.1 3 3.6 2.9 1.4-.1 2-.9 3.7-.9s2.2.9 3.7.9c1.6 0 2.5-1.4 3.5-2.8a12 12 0 001.6-3.3 5.1 5.1 0 01-3.1-4.7l-.2-.5zM12.7 3.4A5.2 5.2 0 0014 0a5.2 5.2 0 00-3.4 1.8 4.9 4.9 0 00-1.2 3.5c1.3.1 2.6-.6 3.3-1.9z" />
              </svg>
            }
            label="Continue with Apple"
            onClick={handleApple}
            isLoading={isLoading}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-lumi-rose/10" />
          <span className="font-body text-lumi-muted font-semibold" style={{ fontSize: 12 }}>
            OR
          </span>
          <div className="flex-1 h-px bg-lumi-rose/10" />
        </div>

        {/* Email sign in */}
        <div className="space-y-3">
          <AuthButton onClick={() => navigate("/auth/login")}>
            Sign In with Email
          </AuthButton>
          <AuthButton variant="secondary" onClick={() => navigate("/auth/register")}>
            Create Account
          </AuthButton>
        </div>
      </AuthCard>

      {/* Guest option */}
      <button
        onClick={handleGuest}
        className="mt-5 font-body font-semibold text-lumi-muted hover:text-lumi-rose transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded-lg px-3 py-2"
        style={{ fontSize: 14 }}
      >
        Continue as Guest
      </button>
    </AuthLayout>
  );
}
