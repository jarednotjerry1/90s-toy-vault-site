import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  color: string;
  image?: string | null;
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
  image,
  featured = false,
}: ArticleCardProps) {
  const categoryColor = categoryColors[category] || "text-vault-cyan";

  if (featured) {
    return (
      <Link href={`/articles/${slug}`} className="group block">
        <article className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-vault-border bg-vault-card overflow-hidden hover:border-vault-amber/40 transition-colors">
          <div
            className="aspect-[16/10] md:aspect-auto md:min-h-[340px] relative overflow-hidden"
            style={{ backgroundColor: color }}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold font-[family-name:var(--font-headline)] text-white/10 select-none">
                  90sTV
                </span>
              </div>
            )}
          </div>
          <div className="p-8 md:py-10 md:pl-10 md:pr-10 flex flex-col justify-center" style={{ paddingLeft: '2.5rem' }}>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}
              >
                {category}
              </span>
              <span className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
                {date}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-headline)] text-vault-text leading-tight group-hover:text-vault-amber transition-colors">
              {title}
            </h2>
            <p className="mt-3 text-vault-text-secondary text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            <div className="mt-5">
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
          className="aspect-[16/9] relative overflow-hidden flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold font-[family-name:var(--font-headline)] text-white/10 select-none">
                90sTV
              </span>
            </div>
          )}
        </div>
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}
            >
              {category}
            </span>
          </div>
          <h3 className="text-base font-bold font-[family-name:var(--font-headline)] text-vault-text leading-snug group-hover:text-vault-amber transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-vault-text-secondary text-sm leading-relaxed line-clamp-2 flex-1">
            {excerpt}
          </p>
          <div className="mt-4 pt-3 border-t border-vault-border flex items-center gap-3 text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-vault-text-muted" />
            <span>{readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
