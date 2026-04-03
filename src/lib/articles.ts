import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  color: string;
  featured?: boolean;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(contentDirectory);
  const articles = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        category: data.category,
        date: data.date,
        readingTime: data.readingTime,
        color: data.color,
        featured: data.featured || false,
        content,
      } as Article;
    });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
