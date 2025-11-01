import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ArticleCard({ article }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {article.coverImage && (
        <Link href={`/article/${article.id}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
            />
            <AvatarFallback>{article.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <Link
              href={`/profile/${article.author.username}`}
              className="text-sm font-medium hover:underline"
            >
              {article.author.name}
            </Link>
            <p className="text-xs text-muted-foreground">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <Link href={`/article/${article.id}`} className="block group">
          <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-balance">
            {article.title}
          </h2>
          <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </Link>

        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {article.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="hover:bg-accent cursor-pointer"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              <span className="text-sm">{article.reactions}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <Link href={`/article/${article.id}#comments`}>
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{article.comments}</span>
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {article.readTime} min read
            </span>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
