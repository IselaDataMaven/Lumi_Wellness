interface SectionTitleProps {
  title: string;
  action?: string;
  onAction?: () => void;
}

export default function SectionTitle({ title, action, onAction }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2
        className="font-body font-bold text-lumi-text"
        style={{ fontSize: 16, letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      {action && (
        <button
          onClick={onAction}
          className="font-body font-semibold text-lumi-rose hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lumi-rose rounded"
          style={{ fontSize: 13 }}
        >
          {action}
        </button>
      )}
    </div>
  );
}
