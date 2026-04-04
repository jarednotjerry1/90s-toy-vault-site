import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getArticleBySlug, getAllSlugs, getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleBody } from "@/components/ArticleBody";
import { TikTokGrid } from "@/components/TikTokEmbed";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | 90s Toy Vault`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      siteName: "90s Toy Vault",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Deep Dive": "text-vault-cyan",
  "Price Guide": "text-vault-amber",
  "Collecting 101": "text-vault-green",
  "History": "text-vault-purple",
  "Opinion": "text-vault-magenta",
  "News": "text-vault-orange",
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const categoryColor = categoryColors[article.category] || "text-vault-cyan";

  // Get related articles (same category, excluding current)
  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="pt-28 pb-20">
      <div className="site-container" style={{ maxWidth: '720px' }}>
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-vault-text-secondary hover:text-vault-text transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back to Vault
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] ${categoryColor}`}>
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-headline)] leading-[1.15] tracking-tight text-vault-text">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-vault-text-muted font-[family-name:var(--font-mono)]">
            <time>{article.date}</time>
            <span className="w-1 h-1 rounded-full bg-vault-text-muted" />
            <span>{article.readingTime}</span>
          </div>
        </header>

        {/* Article body */}
        <ArticleBody content={article.content} />

        {/* TikTok videos */}
        {article.tiktoks && article.tiktoks.length > 0 && (
          <div className="mt-16 pt-12 border-t border-vault-border">
            <h2 className="text-xl font-bold font-[family-name:var(--font-headline)] text-vault-text mb-2">
              Watch the Series
            </h2>
            <p className="text-sm text-vault-text-secondary mb-8">
              Follow <a href="https://tiktok.com/@90stoyvault" target="_blank" rel="noopener noreferrer" className="text-vault-amber hover:underline">@90stoyvault</a> for more.
            </p>
            <TikTokGrid
              videos={article.tiktoks.map((id: string, i: number) => ({
                id,
                label: `Part ${i + 1}`,
              }))}
            />
          </div>
        )}
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="site-container mt-20 pt-16 border-t border-vault-border">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] text-vault-amber">
              Keep Reading
            </span>
            <div className="flex-1 h-px bg-vault-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((a) => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                title={a.title}
                excerpt={a.excerpt}
                category={a.category}
                date={a.date}
                readingTime={a.readingTime}
                color={a.color}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
