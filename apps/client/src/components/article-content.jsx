import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function ArticleContent({ article }) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {article.coverImage && (
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg mb-8 -mx-4 sm:mx-0">
          <Image
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="flex items-center gap-4 mb-6 not-prose">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={article.author.avatar || "/placeholder.svg"}
            alt={article.author.name}
          />
          <AvatarFallback>{article.author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <Link
            href={`/profile/${article.author.username}`}
            className="font-semibold hover:underline"
          >
            {article.author.name}
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-balance">{article.title}</h1>

      <div className="flex gap-2 mb-8 not-prose flex-wrap">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            #{tag}
          </Badge>
        ))}
      </div>

      <div className="leading-relaxed">
        <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>

        <h2>Introduction</h2>
        <p>
          In the ever-evolving landscape of web development, staying up-to-date
          with the latest tools and best practices is crucial. This article
          explores the key concepts and techniques that will help you build
          better applications.
        </p>

        <h2>Key Concepts</h2>
        <p>
          Understanding the fundamentals is essential before diving into
          advanced topics. Let's break down the core principles that make this
          approach so effective.
        </p>

        <h3>Performance Optimization</h3>
        <p>
          Performance is not just about speed—it's about creating a smooth,
          responsive experience for your users. Here are some strategies to
          consider:
        </p>
        <ul>
          <li>Implement code splitting to reduce initial bundle size</li>
          <li>Use lazy loading for images and components</li>
          <li>Optimize your build process with modern tooling</li>
          <li>Leverage caching strategies effectively</li>
        </ul>

        <h3>Developer Experience</h3>
        <p>
          A great developer experience leads to better code quality and faster
          development cycles. Focus on:
        </p>
        <ul>
          <li>Clear and consistent code organization</li>
          <li>Comprehensive documentation</li>
          <li>Automated testing and CI/CD pipelines</li>
          <li>Type safety with TypeScript</li>
        </ul>

        <h2>Best Practices</h2>
        <p>
          Following established patterns and conventions helps maintain code
          quality and makes collaboration easier. Here are some best practices
          to keep in mind:
        </p>

        <ol>
          <li>
            <strong>Write clean, readable code:</strong> Your code should be
            self-documenting and easy to understand.
          </li>
          <li>
            <strong>Test thoroughly:</strong> Implement unit tests, integration
            tests, and end-to-end tests.
          </li>
          <li>
            <strong>Optimize for accessibility:</strong> Ensure your application
            is usable by everyone.
          </li>
          <li>
            <strong>Monitor and measure:</strong> Use analytics and monitoring
            tools to track performance.
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          By following these guidelines and continuously learning, you'll be
          well-equipped to build modern, scalable applications. Remember that
          the best approach often depends on your specific use case, so always
          evaluate your options carefully.
        </p>

        <p>
          What are your thoughts on these practices? Share your experiences in
          the comments below!
        </p>
      </div>
    </article>
  );
}
