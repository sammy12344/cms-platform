import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "New Zero-Day Vulnerability Discovered in Popular Web Framework",
    category: "Vulnerability",
    date: "2024-01-14",
    excerpt:
      "Security researchers have identified a critical zero-day vulnerability affecting millions of websites worldwide.",
    image: "/cybersecurity-code-vulnerability.jpg",
    slug: "new-zero-day-discovered",
  },
  {
    id: 2,
    title: "Annual Cybersecurity Threat Landscape Report Released",
    category: "Report",
    date: "2024-01-13",
    excerpt:
      "Comprehensive analysis of emerging threats and attack trends observed throughout the past year.",
    image: "/data-analytics-dashboard.png",
    slug: "annual-threat-report-2024",
  },
  {
    id: 3,
    title: "Best Practices for Securing Cloud Infrastructure",
    category: "Guide",
    date: "2024-01-12",
    excerpt:
      "Essential security measures and configurations for protecting cloud-based resources and data.",
    image: "/cloud-security-network.jpg",
    slug: "cloud-security-best-practices",
  },
  {
    id: 4,
    title: "Supply Chain Attack Prevention Strategies",
    category: "Analysis",
    date: "2024-01-11",
    excerpt:
      "How organizations can protect themselves from sophisticated supply chain compromises.",
    image: "/supply-chain-security.png",
    slug: "supply-chain-prevention",
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Latest News & Updates
            </h2>
            <p className="text-muted-foreground">
              Stay informed about the latest cybersecurity developments
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden sm:flex gap-2 bg-transparent"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/news/${item.slug}`}>
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-balance group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 text-pretty">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Trending Topics */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Trending Topics</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Ransomware",
              "Zero-Day",
              "Cloud Security",
              "APT Groups",
              "IoT Security",
              "AI/ML Threats",
            ].map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
