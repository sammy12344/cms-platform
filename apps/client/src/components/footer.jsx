import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const footerLinks = {
    Resources: [
      { name: "Security Advisories", href: "#" },
      { name: "Threat Intelligence", href: "#" },
      { name: "Best Practices", href: "#" },
      { name: "Training & Education", href: "#" },
    ],
    Services: [
      { name: "Incident Response", href: "#" },
      { name: "Vulnerability Assessment", href: "#" },
      { name: "Security Consulting", href: "#" },
      { name: "Threat Monitoring", href: "#" },
    ],
    About: [
      { name: "Our Mission", href: "#" },
      { name: "Team", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Careers", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl">CyberSec Center</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty">
              Dedicated to protecting critical infrastructure and organizations
              from cyber threats through real-time intelligence and coordinated
              response.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Subscribe to Alerts</label>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@cybersec.gov"
                  className="hover:text-primary-foreground"
                >
                  contact@cybersec.gov
                </a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+1-800-CYBER-SEC"
                  className="hover:text-primary-foreground"
                >
                  +1-800-CYBER-SEC
                </a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Washington, DC 20001</span>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end gap-4 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary-foreground">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary-foreground">
                Accessibility
              </Link>
            </div>
          </div>

          <div className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} CyberSec Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
