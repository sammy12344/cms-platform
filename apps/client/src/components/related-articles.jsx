import Link from "next/link";
import { Card } from "@/components/ui/card";
import { articles } from "@/lib/data";

export function RelatedArticles({ currentArticleId }) {
  const relatedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3);

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">More from DevBlog</h3>
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="block group"
          >
            <h4 className="font-medium text-sm group-hover:text-primary transition-colors mb-1 line-clamp-2">
              {article.title}
            </h4>
            <p className="text-xs text-muted-foreground">
              {article.author.name} · {article.readTime} min read
            </p>
          </Link>
        ))}
      </div>
    </Card>
  );
}
