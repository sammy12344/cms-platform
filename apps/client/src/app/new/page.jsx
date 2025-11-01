import { Header } from "@/components/header";
import { ArticleEditor } from "@/components/article-editor";

export default function NewArticlePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ArticleEditor />
    </div>
  );
}
