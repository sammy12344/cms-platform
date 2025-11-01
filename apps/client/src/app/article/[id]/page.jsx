import { Header } from "@/components/header";
import { ArticleContent } from "@/components/article-content";
import { ArticleActions } from "@/components/article-actions";
import { CommentSection } from "@/components/comment-section";
import { AuthorCard } from "@/components/author-card";
import { RelatedArticles } from "@/components/related-articles";
import { articles } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto">
          <main className="min-w-0">
            <ArticleContent article={article} />
            <div className="mt-12">
              <CommentSection
                articleId={article.id}
                commentCount={article.comments}
              />
            </div>
          </main>

          <aside className="space-y-6">
            <ArticleActions article={article} />
            <AuthorCard author={article.author} />
            <RelatedArticles currentArticleId={article.id} />
          </aside>
        </div>
      </div>
    </div>
  );
}
