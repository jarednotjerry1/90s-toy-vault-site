interface VideoCardProps {
  title: string;
  category: string;
  duration: string;
  color: string;
}

export function VideoCard({ title, category, duration, color }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        className="aspect-video rounded-xl border border-vault-border overflow-hidden relative flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {/* Play button */}
        <div className="w-16 h-16 rounded-full bg-vault-bg/80 border border-vault-border flex items-center justify-center group-hover:bg-vault-amber/90 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-vault-text ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 text-xs bg-vault-bg/80 text-vault-text px-2 py-1 rounded font-[family-name:var(--font-mono)]">
          {duration}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] text-vault-magenta">
          {category}
        </span>
        <h3 className="mt-1 text-lg font-bold font-[family-name:var(--font-headline)] text-vault-text group-hover:text-vault-amber transition-colors leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
