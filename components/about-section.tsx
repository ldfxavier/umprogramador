"use client"

import { Code2, Database, Layers, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Domínio completo do desenvolvimento web, do frontend ao backend.",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    description: "Experiência em microservices e sistemas escaláveis.",
  },
  {
    icon: Database,
    title: "Databases",
    description: "MySQL, PostgreSQL e otimização de consultas.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Melhoria de 30% na performance de consultas em sistemas.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Sobre</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                Sou um programador sênior com mais de 14 anos de experiência em desenvolvimento web e de software,
                especializado em uma variedade de tecnologias, incluindo{" "}
                <span className="text-foreground">
                  PHP, Node.js, JavaScript, React, Laravel, Zend, Adonis, NestJS, MySQL e PostgreSQL
                </span>
                .
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Minha paixão por tecnologia e resolução de problemas me permitiu criar soluções inovadoras e eficientes
                para diversos desafios empresariais. Ao longo da minha carreira, tenho trabalhado em projetos complexos,
                desde a concepção até a implementação.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-muted-foreground leading-relaxed">
                Minha abordagem centrada no usuário e no negócio me permite entregar soluções que não só são tecnicamente
                sólidas, mas também <span className="text-foreground">alinhadas com os objetivos estratégicos</span> das
                organizações.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} direction="up" delay={0.4 + index * 0.1}>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group h-full">
                  <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
