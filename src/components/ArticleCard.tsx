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
  History: "text-vault-purple",
  Opinion: "text-vault-magenta",
  News: "text-vault-orange",
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
        <article className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] rounded-xl border border-vault-border bg-vault-card overflow-hidden hover:border-vault-amber/40 transition-colors">
          <div
            className="aspect-[16/10] md:aspect-auto md:min-h-[360px] flex items-center justify-center relative"
            style={{ backgroundColor: color }}
          >
            <span className="text-7xl font-bold font-[family-name:var(--font-headline)] text-white/10 select-none">
              90sTV
            </span>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}
              >
                {category}
              </span>
              <span className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
                {date}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-headline)] text-vault-text leading-tight group-hover:text-vault-amber transition-colors">
              {title}
            </h2>
            <p className="mt-4 text-vault-text-secondary text-[0.95rem] leading-relaxed line-clamp-4">
              {excerpt}
            </p>
            <div className="mt-6">
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
      <article className="rounded-xl border border-vault-border bg-vault-card overflow-hidden hover:border-vault-amber/40 transition-colors h-full flex flex-col">
        <div
          className="aspect-[16/9] flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span className="text-4xl font-bold font-[family-name:var(--font-headline)] text-white/10 select-none">
            90sTV
          </span>
        </div>
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}
            >
              {category}
            </span>
          </div>
          <h3 className="text-[1.05rem] font-bold font-[family-name:var(--font-headline)] text-vault-text leading-snug group-hover:text-vault-amber transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-vault-text-secondary text-sm leading-relaxed line-clamp-3 flex-1">
            {excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-vault-text-muted" />
            <span>{readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
