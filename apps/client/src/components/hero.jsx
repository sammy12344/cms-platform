import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-3xl animate-slide-up">
          {/* Alert Badge */}
          <Badge
            variant="destructive"
            className="mb-6 gap-2 py-1.5 px-3 animate-pulse"
          >
            <AlertTriangle className="h-4 w-4" />
            Active Threat Alert
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Protecting Critical Infrastructure from Cyber Threats
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Real-time threat intelligence, security advisories, and incident
            response coordination for organizations worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 group"
              asChild
            >
              <Link href="#alerts">
                View Active Alerts
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Report Incident
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">
                Monitoring
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">1,200+</div>
              <div className="text-sm text-primary-foreground/80">
                Organizations
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">15min</div>
              <div className="text-sm text-primary-foreground/80">
                Avg Response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
