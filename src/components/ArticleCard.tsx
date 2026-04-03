import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  color: string;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  "Deep Dive": "text-vault-cyan",
  "Price Guide": "text-vault-amber",
  "Collecting 101": "text-vault-green",
  "History": "text-vault-purple",
  "Opinion": "text-vault-magenta",
  "News": "text-vault-orange",
};

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readingTime,
  color,
  featured = false,
}: ArticleCardProps) {
  const categoryColor = categoryColors[category] || "text-vault-cyan";

  if (featured) {
    return (
      <Link href={`/articles/${slug}`} className="group block">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl border border-vault-border bg-vault-card overflow-hidden hover:border-vault-amber/30 transition-colors">
          <div
            className="aspect-[16/10] md:aspect-auto md:min-h-[320px] flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <span className="text-6xl font-bold font-[family-name:var(--font-headline)] text-white/20 select-none">
              90sTV
            </span>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}>
                {category}
              </span>
              <span className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
                {date}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-headline)] text-vault-text leading-tight group-hover:text-vault-amber transition-colors">
              {title}
            </h2>
            <p className="mt-3 text-vault-text-secondary text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
                {readingTime}
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${slug}`} className="group block">
      <article className="rounded-xl border border-vault-border bg-vault-card overflow-hidden hover:border-vault-amber/30 transition-colors h-full flex flex-col">
        <div
          className="aspect-[16/10] flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span className="text-4xl font-bold font-[family-name:var(--font-headline)] text-white/20 select-none">
            90sTV
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}>
              {category}
            </span>
            <span className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
              {date}
            </span>
          </div>
          <h3 className="text-lg font-bold font-[family-name:var(--font-headline)] text-vault-text leading-tight group-hover:text-vault-amber transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-vault-text-secondary text-sm leading-relaxed line-clamp-3 flex-1">
            {excerpt}
          </p>
          <div className="mt-4">
            <span className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
              {readingTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
