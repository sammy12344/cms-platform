import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink } from "lucide-react"

const advisories = [
  {
    id: "CSEC-2024-001",
    title: "Security Advisory: Critical Vulnerabilities in Network Devices",
    date: "2024-01-15",
    severity: "critical",
    cves: ["CVE-2024-1234", "CVE-2024-1235"],
    affected: "Network routers and switches from multiple vendors",
  },
  {
    id: "CSEC-2024-002",
    title: "Advisory: Authentication Bypass in Enterprise Software",
    date: "2024-01-14",
    severity: "high",
    cves: ["CVE-2024-5678"],
    affected: "Enterprise resource planning systems",
  },
  {
    id: "CSEC-2024-003",
    title: "Security Update: Patch Available for Database Management System",
    date: "2024-01-13",
    severity: "medium",
    cves: ["CVE-2024-9012"],
    affected: "Database management systems version 5.x",
  },
]

const severityColors = {
  critical: "bg-destructive text-destructive-foreground",
  high: "bg-warning text-warning-foreground",
  medium: "bg-accent text-accent-foreground",
}

export function AdvisoriesSection() {
  return (
    <section id="advisories" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Security Advisories</h2>
          <p className="text-muted-foreground">Official security advisories and vulnerability disclosures</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {advisories.map((advisory, index) => (
            <Card
              key={advisory.id}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm text-muted-foreground mb-1">{advisory.id}</div>
                  <Badge className={severityColors[advisory.severity]}>
                    {advisory.severity.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <h3 className="font-semibold mb-3 text-balance">{advisory.title}</h3>

              <div className="space-y-2 mb-4 text-sm">
                <div>
                  <span className="text-muted-foreground">CVEs: </span>
                  <span className="font-mono">{advisory.cves.join(", ")}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Affected: </span>
                  <span>{advisory.affected}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Published: </span>
                  <span>{new Date(advisory.date).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  PDF
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            View All Advisories
          </Button>
        </div>
      </div>
    </section>
  )
}
