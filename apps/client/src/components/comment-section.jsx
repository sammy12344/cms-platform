"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle } from "lucide-react";

const mockComments = [
  {
    id: "1",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?key=comment1",
      username: "alexj",
    },
    content:
      "Great article! This really helped me understand the concepts better. I've been struggling with this for a while.",
    likes: 12,
    replies: 2,
    createdAt: "2025-01-28",
  },
  {
    id: "2",
    author: {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?key=comment2",
      username: "mariag",
    },
    content:
      "Thanks for sharing this. Do you have any recommendations for further reading on this topic?",
    likes: 8,
    replies: 1,
    createdAt: "2025-01-27",
  },
];

export function CommentSection({ articleId, commentCount }) {
  const [comment, setComment] = useState("");
  const [comments] = useState(mockComments);

  return (
    <div id="comments" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Discussion ({commentCount})</h2>
      </div>

      <Card className="p-4">
        <Textarea
          placeholder="Add to the discussion..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] mb-3"
        />
        <div className="flex justify-end">
          <Button disabled={!comment.trim()}>Post Comment</Button>
        </div>
      </Card>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-6">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={comment.author.avatar || "/placeholder.svg"}
                  alt={comment.author.name}
                />
                <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{comment.author.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3">
                  {comment.content}
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-2 h-8">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 h-8">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs">Reply</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
