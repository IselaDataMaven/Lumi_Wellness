interface LumiAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  animate?: boolean;
  className?: string;
}

const sizes = { sm: 40, md: 56, lg: 80, xl: 120 };

export default function LumiAvatar({
  size = "md",
  glow = true,
  animate = true,
  className = "",
}: LumiAvatarProps) {
  const px = sizes[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${animate ? "animate-float" : ""} ${className}`}
      style={{ width: px, height: px }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(216,143,168,0.25) 0%, rgba(205,180,219,0.10) 60%, transparent 80%)",
            transform: "scale(1.6)",
          }}
        />
      )}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        style={{ position: "relative", zIndex: 1 }}
      >
        <defs>
          <radialGradient id="lumiGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(216,143,168,0.3)" />
            <stop offset="100%" stopColor="rgba(216,143,168,0)" />
          </radialGradient>
          <linearGradient id="lumiFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5EDF9" />
            <stop offset="50%" stopColor="#FBF0F4" />
            <stop offset="100%" stopColor="#F0C5D5" />
          </linearGradient>
          <linearGradient id="lumiLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8D5BA" />
            <stop offset="100%" stopColor="#C8EDD8" />
          </linearGradient>
          <linearGradient id="lumiLeaf2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CDB4DB" />
            <stop offset="100%" stopColor="#E8D8F0" />
          </linearGradient>
          <linearGradient id="lumiLeaf3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D88FA8" />
            <stop offset="100%" stopColor="#F0C5D5" />
          </linearGradient>
          <filter
            id="lumiFaceShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="rgba(216,143,168,0.25)"
            />
          </filter>
        </defs>

        {/* Soft background glow */}
        <circle cx="60" cy="60" r="55" fill="url(#lumiGlow)" />

        {/* Botanical leaves crown */}
        {/* Left leaf */}
        <ellipse
          cx="36"
          cy="30"
          rx="8"
          ry="14"
          fill="url(#lumiLeaf1)"
          opacity="0.9"
          transform="rotate(-30 36 30)"
          className="animate-leaf-sway"
        />
        {/* Center leaf */}
        <ellipse
          cx="60"
          cy="22"
          rx="8"
          ry="16"
          fill="url(#lumiLeaf2)"
          opacity="0.9"
        />
        {/* Right leaf */}
        <ellipse
          cx="84"
          cy="30"
          rx="8"
          ry="14"
          fill="url(#lumiLeaf3)"
          opacity="0.9"
          transform="rotate(30 84 30)"
          className="animate-leaf-sway delay-500"
        />
        {/* Small flower center */}
        <circle cx="60" cy="24" r="4" fill="#F7E7A9" opacity="0.9" />
        <circle cx="60" cy="24" r="2.5" fill="#D88FA8" opacity="0.8" />

        {/* Face circle */}
        <circle
          cx="60"
          cy="65"
          r="34"
          fill="url(#lumiFace)"
          filter="url(#lumiFaceShadow)"
        />

        {/* Cheek blush */}
        <ellipse cx="42" cy="72" rx="8" ry="5" fill="#D88FA8" opacity="0.2" />
        <ellipse cx="78" cy="72" rx="8" ry="5" fill="#D88FA8" opacity="0.2" />

        {/* Eyes */}
        <ellipse cx="51" cy="62" rx="4.5" ry="5" fill="#4A3860" />
        <ellipse cx="69" cy="62" rx="4.5" ry="5" fill="#4A3860" />
        {/* Eye shine */}
        <circle cx="53" cy="60" r="1.5" fill="white" opacity="0.9" />
        <circle cx="71" cy="60" r="1.5" fill="white" opacity="0.9" />
        {/* Eye lashes hint */}
        <path
          d="M47 58 Q49 56 51 57"
          stroke="#4A3860"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M65 57 Q67 56 69 58"
          stroke="#4A3860"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* Gentle smile */}
        <path
          d="M51 74 Q60 81 69 74"
          stroke="#C47A9A"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Small sparkle dots around */}
        <circle
          cx="25"
          cy="55"
          r="2"
          fill="#F7E7A9"
          opacity="0.8"
          className="animate-star-twinkle"
        />
        <circle
          cx="95"
          cy="48"
          r="2.5"
          fill="#CDB4DB"
          opacity="0.7"
          className="animate-star-twinkle delay-300"
        />
        <circle
          cx="30"
          cy="82"
          r="1.5"
          fill="#A8D5BA"
          opacity="0.8"
          className="animate-star-twinkle delay-500"
        />
        <circle
          cx="92"
          cy="78"
          r="2"
          fill="#D88FA8"
          opacity="0.6"
          className="animate-star-twinkle delay-200"
        />

        {/* Small petal at neck base */}
        <ellipse cx="60" cy="97" rx="12" ry="5" fill="#F0C5D5" opacity="0.4" />
      </svg>
    </div>
  );
}
