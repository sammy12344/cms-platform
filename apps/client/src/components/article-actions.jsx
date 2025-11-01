"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

export function ArticleActions({ article }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [reactions, setReactions] = useState(article.reactions);

  const handleLike = () => {
    setLiked(!liked);
    setReactions(liked ? reactions - 1 : reactions + 1);
  };

  return (
    <Card className="p-4 sticky top-20">
      <div className="space-y-2">
        <Button
          variant={liked ? "default" : "ghost"}
          className="w-full justify-start gap-3"
          onClick={handleLike}
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Like</span>
            <span className="text-xs text-muted-foreground">{reactions}</span>
          </div>
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-3">
          <MessageCircle className="h-5 w-5" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Comment</span>
            <span className="text-xs text-muted-foreground">
              {article.comments}
            </span>
          </div>
        </Button>

        <Button
          variant={bookmarked ? "default" : "ghost"}
          className="w-full justify-start gap-3"
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`} />
          <span className="text-sm font-medium">Save</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-3">
          <Share2 className="h-5 w-5" />
          <span className="text-sm font-medium">Share</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-3">
          <MoreHorizontal className="h-5 w-5" />
          <span className="text-sm font-medium">More</span>
        </Button>
      </div>
    </Card>
  );
}
