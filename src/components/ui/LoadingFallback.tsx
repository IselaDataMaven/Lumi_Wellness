import LumiAvatar from "../LumiAvatar";

export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-lumi-gradient">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <LumiAvatar size="md" glow animate />
        <p
          className="font-body text-lumi-muted font-semibold"
          style={{ fontSize: 14, letterSpacing: "0.02em" }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
