"use client"

import Link from "next/link"
import { Home, TrendingUp, Tag, Bookmark, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const popularTags = [
  { name: "javascript", count: "12.5k" },
  { name: "react", count: "10.2k" },
  { name: "typescript", count: "8.7k" },
  { name: "nextjs", count: "7.3k" },
  { name: "webdev", count: "15.1k" },
  { name: "css", count: "9.4k" },
  { name: "python", count: "11.8k" },
  { name: "nodejs", count: "6.9k" },
]

export function Sidebar() {
  return (
    <aside className="w-full space-y-4">
      <nav className="space-y-1">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/">
            <Home className="mr-3 h-5 w-5" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/trending">
            <TrendingUp className="mr-3 h-5 w-5" />
            Trending
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/bookmarks">
            <Bookmark className="mr-3 h-5 w-5" />
            Bookmarks
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/profile">
            <User className="mr-3 h-5 w-5" />
            Profile
          </Link>
        </Button>
      </nav>
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="h-4 w-4" />
          <h3 className="font-semibold text-sm">Popular Tags</h3>
        </div>
        <div className="space-y-2">
          {popularTags.map((tag) => (
            <Link
              key={tag.name}
              href={`/tag/${tag.name}`}
              className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-accent transition-colors">
              <span className="text-sm">#{tag.name}</span>
              <span className="text-xs text-muted-foreground">{tag.count}</span>
            </Link>
          ))}
        </div>
      </Card>
      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-3">About DevBlog</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A community of developers sharing knowledge, experiences, and insights about web development, programming, and
          technology.
        </p>
      </Card>
    </aside>
  );
}
