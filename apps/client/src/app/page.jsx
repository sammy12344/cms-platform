import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ArticleFeed } from "@/components/article-feed";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr_280px] gap-6">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <main>
            <ArticleFeed />
          </main>
          <aside className="hidden xl:block space-y-4">
            {/* Right sidebar for additional content */}
          </aside>
        </div>
      </div>
    </div>
  );
}
