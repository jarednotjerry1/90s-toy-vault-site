import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { TikTokGrid } from "@/components/TikTokEmbed";
import { Newsletter } from "@/components/Newsletter";
import { getAllArticles } from "@/lib/articles";

const featuredTikToks = [
  { id: "7612700382778625293", label: "TMNT History" },
  { id: "7617628926671736078", label: "Beanie Babies" },
  { id: "7624569840543468830", label: "$175K Beach Bomb" },
  { id: "7623387580788182303", label: "Uncanny Valley" },
  { id: "7618371132806237453", label: "Beanie Babies Pt. 3" },
  { id: "7624331679909317918", label: "Hot Wheels" },
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.find((a) => a.featured);
  const grid = articles.filter((a) => !a.featured);

  return (
    <div className="mx-auto px-8 md:px-12 lg:px-16" style={{ maxWidth: '960px' }}>
      <Hero />

      {/* Featured Article */}
      {featured && (
        <section className="pb-16">
          <div className="flex items-center gap-3 mb-6">
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
            image={featured.image}
            featured
          />
        </section>
      )}

      {/* Article Grid */}
      <section id="articles" className="py-16">
        <div className="flex items-center gap-3 mb-6">
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
              image={article.image}
            />
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-mono)] text-vault-magenta">
            Videos
          </span>
          <div className="flex-1 h-px bg-vault-border" />
        </div>
        <p className="text-sm text-vault-text-secondary mb-8">
          From our TikTok <a href="https://tiktok.com/@90stoyvault" target="_blank" rel="noopener noreferrer" className="text-vault-amber hover:underline">@90stoyvault</a>
        </p>
        <TikTokGrid videos={featuredTikToks} />
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
