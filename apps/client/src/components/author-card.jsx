import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function AuthorCard({ author }) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={author.avatar || "/placeholder.svg"}
            alt={author.name}
          />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <Link
            href={`/profile/${author.username}`}
            className="font-semibold hover:underline block"
          >
            {author.name}
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Software developer passionate about web technologies and open
            source.
          </p>
        </div>
      </div>
      <Button className="w-full mt-4">Follow</Button>
    </Card>
  );
}
