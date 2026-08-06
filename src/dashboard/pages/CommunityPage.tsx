D:export default function CommunityPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-5 pb-24 bg-lumi-gradient">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #A8D5BA, #CDB4DB)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        </div>
        <h1 className="font-display text-lumi-text" style={{ fontSize: 26 }}>Community</h1>
        <p className="font-body text-lumi-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
          Connect with others on their wellness journey. A supportive community is coming soon.
        </p>
      </div>
    </div>
  );
}
