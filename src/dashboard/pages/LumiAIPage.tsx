export default function LumiAIPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-5 pb-24 bg-lumi-gradient">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #D88FA8, #CDB4DB)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" width="32" height="32">
            <path d="M12 2a7 7 0 017 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 017-7z" />
            <circle cx="12" cy="9" r="2" />
          </svg>
        </div>
        <h1 className="font-display text-lumi-text" style={{ fontSize: 26 }}>Lumi AI</h1>
        <p className="font-body text-lumi-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
          Your personal wellness companion is coming soon. Lumi AI will guide you with gentle, personalized recommendations.
        </p>
      </div>
    </div>
  );
}
