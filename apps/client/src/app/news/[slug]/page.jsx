import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ChevronLeft,
  AlertTriangle,
  Shield,
  FileText,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const newsArticles = {
  "critical-ransomware-campaign-2024": {
    title: "Critical Ransomware Campaign Targeting Healthcare Sector",
    category: "Threat Alert",
    severity: "critical",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "Security Research Team",
    summary:
      "A sophisticated ransomware campaign has been identified targeting healthcare organizations worldwide. Immediate action required.",
    content: `
      <h2>Executive Summary</h2>
      <p>Our threat intelligence team has identified a sophisticated ransomware campaign specifically targeting healthcare organizations across North America and Europe. The threat actors are exploiting a recently disclosed vulnerability in widely-used medical record systems.</p>
      
      <h2>Technical Details</h2>
      <p>The attack vector involves a multi-stage payload delivery mechanism that begins with spear-phishing emails containing malicious attachments. Once executed, the malware establishes persistence through registry modifications and scheduled tasks.</p>
      
      <h3>Indicators of Compromise (IoCs)</h3>
      <ul>
        <li>File Hash (SHA-256): a3f5d8e9c2b1a4f6e8d9c2b1a4f6e8d9c2b1a4f6e8d9c2b1a4f6e8d9c2b1a4f6</li>
        <li>C2 Server: 192.168.100.45:8443</li>
        <li>Registry Key: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\SystemUpdate</li>
      </ul>
      
      <h2>Recommended Actions</h2>
      <ol>
        <li>Immediately patch all systems with the latest security updates</li>
        <li>Implement network segmentation to isolate critical medical systems</li>
        <li>Enable multi-factor authentication on all administrative accounts</li>
        <li>Conduct security awareness training for all staff members</li>
        <li>Review and test backup and recovery procedures</li>
      </ol>
      
      <h2>Impact Assessment</h2>
      <p>Organizations that fall victim to this ransomware face significant operational disruption, with average downtime ranging from 3-7 days. The threat actors are demanding ransoms between $500,000 and $2 million in cryptocurrency.</p>
      
      <h2>Attribution</h2>
      <p>Based on tactics, techniques, and procedures (TTPs), we assess with moderate confidence that this campaign is linked to the APT-2024 threat group, known for targeting critical infrastructure sectors.</p>
    `,
    relatedCVEs: ["CVE-2024-1234", "CVE-2024-5678"],
    tags: ["Ransomware", "Healthcare", "APT", "Critical Infrastructure"],
  },
  "new-zero-day-discovered": {
    title: "Zero-Day Vulnerability Discovered in Popular Web Framework",
    category: "Vulnerability",
    severity: "high",
    date: "2024-01-14",
    readTime: "5 min read",
    author: "Vulnerability Research Team",
    summary:
      "A critical zero-day vulnerability has been discovered in a widely-used web framework, affecting millions of websites globally.",
    content: `
      <h2>Vulnerability Overview</h2>
      <p>Security researchers have identified a critical remote code execution vulnerability in version 3.x of the popular WebFramework library. This zero-day vulnerability allows unauthenticated attackers to execute arbitrary code on affected systems.</p>
      
      <h2>Affected Versions</h2>
      <ul>
        <li>WebFramework 3.0.0 through 3.5.2</li>
        <li>WebFramework Enterprise Edition 3.x</li>
      </ul>
      
      <h2>Technical Analysis</h2>
      <p>The vulnerability exists in the request parsing module, where insufficient input validation allows attackers to inject malicious payloads through specially crafted HTTP headers. The flaw can be exploited remotely without authentication.</p>
      
      <h2>Mitigation Steps</h2>
      <ol>
        <li>Upgrade to WebFramework version 3.5.3 or later immediately</li>
        <li>If immediate patching is not possible, implement WAF rules to block suspicious requests</li>
        <li>Monitor logs for exploitation attempts</li>
        <li>Review system access logs for signs of compromise</li>
      </ol>
      
      <h2>Detection</h2>
      <p>Organizations can detect exploitation attempts by monitoring for unusual HTTP header patterns and unexpected process executions from web server processes.</p>
    `,
    relatedCVEs: ["CVE-2024-9999"],
    tags: ["Zero-Day", "RCE", "Web Security", "Patch Available"],
  },
};

export default async function NewsDetailPage({ params }) {
  const { slug } = await params
  const article = newsArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const severityColors = {
    critical: "bg-destructive text-destructive-foreground",
    high: "bg-warning text-warning-foreground",
    medium: "bg-accent text-accent-foreground",
    low: "bg-muted text-muted-foreground",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild className="gap-2">
              <Link href="/">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4 animate-fade-in">
              <Badge variant="outline" className="gap-1">
                <FileText className="h-3 w-3" />
                {article.category}
              </Badge>
              <Badge className={severityColors[article.severity]}>
                <AlertTriangle className="h-3 w-3 mr-1" />
                {article.severity.toUpperCase()}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-slide-up">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty animate-slide-up">
              {article.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none animate-slide-up">
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-foreground
                           [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-foreground
                           [&>p]:text-foreground [&>p]:leading-relaxed [&>p]:mb-4
                           [&>ul]:my-4 [&>ul]:space-y-2 [&>li]:text-foreground
                           [&>ol]:my-4 [&>ol]:space-y-2 [&>ol]:list-decimal [&>ol]:ml-6"
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related CVEs */}
              {article.relatedCVEs.length > 0 && (
                <Card className="p-6 animate-fade-in">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Related CVEs
                  </h3>
                  <div className="space-y-2">
                    {article.relatedCVEs.map((cve) => (
                      <Button
                        key={cve}
                        variant="outline"
                        className="w-full justify-between bg-transparent"
                        asChild
                      >
                        <a
                          href={`https://nvd.nist.gov/vuln/detail/${cve}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {cve}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </Card>
              )}

              {/* Tags */}
              <Card className="p-6 animate-fade-in">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 bg-primary/5 border-primary/20 animate-fade-in">
                <h3 className="font-semibold mb-4">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our incident response team for immediate assistance.
                </p>
                <Button className="w-full" variant="default">
                  Contact Support
                </Button>
              </Card>
            </aside>
          </div>

          <Separator className="my-12" />

          {/* Related Articles */}
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(newsArticles)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedArticle]) => (
                  <Card
                    key={slug}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <Badge variant="outline" className="mb-3">
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 text-lg">
                      <Link
                        href={`/news/${slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedArticle.summary}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>
                        {new Date(relatedArticle.date).toLocaleDateString()}
                      </span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
