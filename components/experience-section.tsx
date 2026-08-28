"use client"

import { ExternalLink, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Experience {
  period: string
  title: string
  company: string
  location: string
  description: string
  skills: string[]
  url?: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    period: "2023 — PRESENTE",
    title: "Fundador & Lead Software Architect / CEO",
    company: "XM CODE",
    location: "Brasília, DF",
    description:
      "Fundador e líder técnico à frente da concepção, arquitetura e desenvolvimento de ecossistemas corporativos e públicos de alta escala. Criação das plataformas XM LEGIS (14 módulos com IA, WebSockets e ICP-Brasil) e XM Gestão Pública (35 módulos com biometria facial, previdência RPPS e compras públicas). Gestão técnica, liderança de produto e engenharia com IA aplicada.",
    skills: [
      "Next.js 15",
      "NestJS",
      "Node.js",
      "TypeScript",
      "AI SDK & Agentes",
      "Domain-Driven Design",
      "WebSockets",
      "PostgreSQL",
      "ICP-Brasil",
      "LGPD",
    ],
    url: "https://xmcode.com.br",
    current: true,
  },
  {
    period: "AGO 2023 — PRESENTE",
    title: "Desenvolvedor Full Stack Sênior",
    company: "G4F",
    location: "Brasília, DF",
    description:
      "Desenvolvimento full stack e consultoria de software corporativo utilizando ReactJS, React Native, Node.js, PHP e Zend em projetos empresariais de grande impacto.",
    skills: ["ReactJS", "React Native", "Node.js", "PHP", "Zend", "Clean Code"],
    url: "https://www.g4f.com.br",
  },
  {
    period: "MAI 2022 — NOV 2023",
    title: "Desenvolvedor Back End",
    company: "Basis Tecnologia",
    location: "Brasília, DF",
    description:
      "Desenvolvimento backend corporativo com foco em alta disponibilidade, otimização de rotinas críticas e APIs robustas utilizando PHP, Node.js e Laravel para clientes do setor público e privado.",
    skills: ["PHP", "Node.js", "Laravel", "PostgreSQL", "REST APIs"],
    url: "https://www.basis.com.br",
  },
  {
    period: "SET 2021 — JUL 2022",
    title: "Desenvolvedor Back End",
    company: "CredPago",
    location: "Joinville, SC (Remoto)",
    description:
      "Desenvolvimento de microsserviços e APIs para ecossistema financeiro e de garantias imobiliárias, lidando com transações críticas e integrações seguras utilizando PHP, Node.js, Laravel e Adonis.",
    skills: ["PHP", "Node.js", "Laravel", "Adonis", "Microsserviços", "MySQL"],
    url: "https://credpago.com.br",
  },
  {
    period: "JAN 2017 — OUT 2021",
    title: "Programador Pleno / Web & Mobile",
    company: "Marktclub",
    location: "Brasília, DF",
    description:
      "Desenvolvimento mobile (React Native) e web de plataformas de clubes de benefícios e social business, atendendo a grandes entidades associativas e milhares de usuários ativos.",
    skills: ["React Native", "ReactJS", "PHP", "Laravel", "Mobile App", "APIs"],
    url: "https://youhuul.com.br",
  },
  {
    period: "MAI 2011 — DEZ 2016",
    title: "Analista de Sistemas & Desenvolvedor Web",
    company: "SAGA",
    location: "Brasília, DF",
    description:
      "Análise de requisitos, modelagem de banco de dados e desenvolvimento de sistemas internos e portais web utilizando PHP, JavaScript, MySQL, gestão ágil e integração contínua.",
    skills: ["PHP", "JavaScript", "MySQL", "Jira", "Bamboo", "HTML/CSS"],
    url: "https://saga.com.br",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Experiência Profissional</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto mb-12">
            Trajetória de mais de 16 anos construindo soluções de tecnologia, liderando engenharia de produtos e desenvolvendo sistemas de missão crítica.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company} direction="up" delay={0.1 + index * 0.08}>
              <div
                className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 ${
                  exp.current
                    ? "bg-gradient-to-r from-primary/10 via-card to-card border-primary/40 shadow-lg shadow-primary/5 hover:border-primary"
                    : "bg-card border-border hover:border-primary/50 hover:bg-secondary/30"
                }`}
              >
                <div className="grid md:grid-cols-[190px_1fr] gap-4">
                  {/* Period & Status */}
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground font-mono font-medium">{exp.period}</div>
                    {exp.current && (
                      <Badge className="bg-primary/20 text-primary border border-primary/40 font-mono text-[10px] uppercase">
                        Posição Atual
                      </Badge>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-foreground text-base sm:text-lg flex items-center gap-2">
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                            >
                              {exp.title} · <span className="text-primary">{exp.company}</span>
                              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground hover:text-primary" />
                            </a>
                          ) : (
                            <span>
                              {exp.title} · <span className="text-primary">{exp.company}</span>
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[11px] font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
