import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { VideoCard } from "@/components/VideoCard";
import { Newsletter } from "@/components/Newsletter";
import { getAllArticles } from "@/lib/articles";

const videos = [
  {
    title: "The Toy That Sold for $200,000",
    category: "Toy Vault Files",
    duration: "4:32",
    color: "#FF4FA3",
  },
  {
    title: "Why 90s Toy Packaging Was an Art Form",
    category: "Nostalgia History",
    duration: "6:15",
    color: "#9B7BFF",
  },
  {
    title: "Banned Toys: The Government Edition",
    category: "Banned Toys",
    duration: "8:47",
    color: "#FF6B2B",
  },
  {
    title: "Your Mom Threw Away a Fortune",
    category: "Price Guides",
    duration: "5:23",
    color: "#00E5D9",
  },
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.find((a) => a.featured);
  const grid = articles.filter((a) => !a.featured);

  return (
    <>
      <Hero />

      {/* Featured Article */}
      {featured && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] text-vault-amber">
                Featured
              </span>
              <div className="flex-1 h-px bg-vault-border" />
            </div>
            <ArticleCard
              slug={featured.slug}
              title={featured.title}
              excerpt={featured.excerpt}
              category={featured.category}
              date={featured.date}
              readingTime={featured.readingTime}
              color={featured.color}
              featured
            />
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section id="articles" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] text-vault-cyan">
              Latest
            </span>
            <div className="flex-1 h-px bg-vault-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((article) => (
              <ArticleCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                readingTime={article.readingTime}
                color={article.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="px-6 py-16 bg-vault-bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] text-vault-magenta">
              Videos
            </span>
            <div className="flex-1 h-px bg-vault-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <VideoCard
                key={video.title}
                title={video.title}
                category={video.category}
                duration={video.duration}
                color={video.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
