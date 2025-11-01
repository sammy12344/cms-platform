import { Shield, AlertTriangle, FileText, Users } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "23",
    label: "Active Threats",
    change: "+3 this week",
    color: "text-destructive",
  },
  {
    icon: FileText,
    value: "156",
    label: "Advisories Published",
    change: "+12 this month",
    color: "text-primary",
  },
  {
    icon: Shield,
    value: "1,247",
    label: "Organizations Protected",
    change: "+45 this quarter",
    color: "text-success",
  },
  {
    icon: Users,
    value: "24/7",
    label: "Security Operations",
    change: "Always monitoring",
    color: "text-accent",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 border-y bg-card">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.change}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
