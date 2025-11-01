import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/data"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function ArticleFeed() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="feed" className="w-full">
        <TabsList
          className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="feed"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
            Feed
          </TabsTrigger>
          <TabsTrigger
            value="latest"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
            Latest
          </TabsTrigger>
          <TabsTrigger
            value="top"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
            Top
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="mt-4 space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </TabsContent>

        <TabsContent value="latest" className="mt-4 space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </TabsContent>

        <TabsContent value="top" className="mt-4 space-y-4">
          {articles
            .slice()
            .sort((a, b) => b.reactions - a.reactions)
            .map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
