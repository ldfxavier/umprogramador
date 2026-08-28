"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Cpu, Layout, Bot, Database, ShieldCheck, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Arquitetura & Backend",
    icon: Cpu,
    skills: [
      "Node.js & TypeScript",
      "NestJS Framework",
      "Domain-Driven Design (DDD)",
      "Clean Architecture & SOLID",
      "PHP (Laravel, Zend, Adonis)",
      "Microsserviços & REST APIs",
      "WebSockets em Tempo Real",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Layout,
    skills: [
      "React 19 & Next.js 15 (App Router)",
      "React Native & Expo Framework",
      "TypeScript & JavaScript Moderno",
      "Tailwind CSS & Design Systems",
      "Suspense API & Server Components",
      "Base UI & Radix UI",
      "State Management & Cache API",
    ],
  },
  {
    title: "Inteligência Artificial & Agentes",
    icon: Bot,
    skills: [
      "AI SDK & Agentes Autônomos",
      "Model Context Protocol (MCP)",
      "Subagentes & Spec-Driven Dev",
      "Engenharia de Prompt & Claude / OpenAI",
      "OCR Inteligente de Documentos",
      "Biometria Facial & Visão",
      "Vibe Coding & Ferramentas IA",
    ],
  },
  {
    title: "Bancos de Dados, Cloud & Segurança",
    icon: Database,
    skills: [
      "PostgreSQL & MySQL",
      "Drizzle ORM & Prisma",
      "Assinatura Digital ICP-Brasil (PAdES)",
      "Conformidade com a LGPD",
      "Docker & Containers",
      "Git, GitHub CLI & CI/CD",
      "Playwright & Testes com Vitest",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Habilidades Técnicas</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto mb-12">
            Domínio abrangente de tecnologias modernas para construção de produtos escaláveis, seguros e de alto desempenho.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <ScrollReveal key={category.title} direction="up" delay={0.1 + index * 0.08}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-start group">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
