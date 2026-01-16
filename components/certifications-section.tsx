"use client"

import { Award, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    title: "JSNSD: OpenJS Node.js Services Developer",
    issuer: "The Linux Foundation",
    date: "Fev 2025",
    highlight: true,
  },
  {
    title: "NestJS",
    issuer: "Rocketseat",
    date: "Jun 2024",
  },
  {
    title: "DDD no Node.js",
    issuer: "Rocketseat",
    date: "Jun 2024",
  },
  {
    title: "Fundamentos do Node.js",
    issuer: "Rocketseat",
    date: "Jun 2024",
  },
  {
    title: "NLW Pocket: Mobile - React Native",
    issuer: "Rocketseat",
    date: "Dez 2024",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Certificações</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-colors group cursor-pointer ${
                cert.highlight
                  ? "bg-primary/10 border-primary/50 hover:border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <Award className={`h-5 w-5 ${cert.highlight ? "text-primary" : "text-muted-foreground"}`} />
                {cert.highlight && <Badge className="text-xs">Destaque</Badge>}
              </div>

              <h3 className="font-semibold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {cert.title}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
