"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

const education = [
  {
    degree: "Pós-graduação Lato Sensu",
    field: "Engenharia de Software",
    institution: "Faculdade Focus",
    period: "2026",
    badge: "Especialização",
    description:
      "Especialização com foco em arquitetura de software para sistemas escaláveis, padrões de projeto modernos, microsserviços, Clean Architecture, qualidade de código e garantia de resiliência em aplicações críticas.",
  },
  {
    degree: "Bacharel em Sistemas de Informação",
    field: "Sistemas de Informação e Computação",
    institution: "Anhanguera Educacional",
    period: "2010 — 2014",
    badge: "Graduação",
    description:
      "Formação sólida em algoritmos, estruturas de dados, engenharia de software, modelagem de bancos de dados relacionais e governança de TI.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Formação Acadêmica</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto mb-12">
            Base acadêmica oficial em Engenharia de Software e Sistemas de Informação.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.field} direction="up" delay={0.1 + index * 0.1}>
              <div className="p-6 sm:p-7 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group h-full flex flex-col justify-between hover:shadow-lg hover:shadow-primary/5">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30">
                      {edu.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary text-sm font-medium mt-0.5">{edu.field}</p>
                    <p className="text-muted-foreground text-xs">{edu.institution}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
