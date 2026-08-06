interface QuickActionButtonProps {
  icon: string;
  label: string;
  color: string;
  bgColor: string;
  onClick?: () => void;
}

export default function QuickActionButton({ icon, label, color, bgColor, onClick }: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 rounded-2xl py-3.5 px-2 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose"
      style={{ background: bgColor, border: `1px solid ${color}22` }}
    >
      <span style={{ fontSize: 22 }}>{icon}</span>
      <span className="font-body font-bold text-lumi-text text-center" style={{ fontSize: 11, lineHeight: 1.2 }}>
        {label}
      </span>
    </button>
  );
}
