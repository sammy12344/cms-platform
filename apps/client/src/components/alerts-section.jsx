import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const alerts = [
  {
    id: 1,
    title: "Critical Ransomware Campaign Targeting Healthcare Sector",
    severity: "critical",
    date: "2024-01-15",
    time: "14:30 UTC",
    description:
      "Active ransomware campaign exploiting CVE-2024-1234 in medical record systems. Immediate patching required.",
    cve: "CVE-2024-1234",
    slug: "critical-ransomware-campaign-2024",
  },
  {
    id: 2,
    title: "Phishing Campaign Impersonating Government Agencies",
    severity: "high",
    date: "2024-01-15",
    time: "11:15 UTC",
    description: "Widespread phishing emails targeting public sector employees with malicious attachments.",
    cve: null,
    slug: "phishing-campaign-government-2024",
  },
  {
    id: 3,
    title: "DDoS Attacks on Financial Services Infrastructure",
    severity: "high",
    date: "2024-01-14",
    time: "18:45 UTC",
    description: "Coordinated DDoS attacks affecting multiple financial institutions. Mitigation strategies available.",
    cve: null,
    slug: "ddos-financial-services-2024",
  },
]

const severityConfig = {
  critical: {
    color: "bg-destructive text-destructive-foreground",
    icon: AlertTriangle,
    label: "CRITICAL",
  },
  high: {
    color: "bg-warning text-warning-foreground",
    icon: AlertTriangle,
    label: "HIGH",
  },
  medium: {
    color: "bg-accent text-accent-foreground",
    icon: AlertTriangle,
    label: "MEDIUM",
  },
}

export function AlertsSection() {
  return (
    <section id="alerts" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Active Security Alerts</h2>
            <p className="text-muted-foreground">Real-time threat notifications requiring immediate attention</p>
          </div>
          <Button variant="outline" className="hidden sm:flex gap-2 bg-transparent">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6">
          {alerts.map((alert, index) => {
            const config = severityConfig[alert.severity]
            const Icon = config.icon

            return (
              <Card
                key={alert.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Severity Badge */}
                  <div className={`${config.color} rounded-lg p-3 shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className={config.color}>{config.label}</Badge>
                      {alert.cve && <Badge variant="outline">{alert.cve}</Badge>}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-balance">{alert.title}</h3>

                    <p className="text-muted-foreground mb-4 text-pretty">{alert.description}</p>

                    <Button variant="default" size="sm" className="gap-2" asChild>
                      <Link href={`/news/${alert.slug}`}>
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
