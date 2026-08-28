"use client"

import { Award, ExternalLink, CheckCircle2, Clock, ShieldCheck, Sparkles, Copy, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

interface Certification {
  title: string
  issuer: string
  date: string
  hours?: string
  code?: string
  verifyUrl?: string
  highlight?: boolean
  topics: string[]
}

const certifications: Certification[] = [
  {
    title: "JSNSD: OpenJS Node.js Services Developer",
    issuer: "The Linux Foundation",
    date: "Fev 2025",
    code: "d997504a-0e4a-4269-87c3-b163fc8a4559",
    verifyUrl: "https://www.credly.com/badges/d997504a-0e4a-4269-87c3-b163fc8a4559",
    highlight: true,
    topics: ["Node.js Services", "REST APIs", "Security & Microservices", "Performance & Debugging"],
  },
  {
    title: "NLW Operator — Fullstack & AI Agents",
    issuer: "Rocketseat",
    date: "Mar 2026",
    hours: "5h",
    code: "6b116830-d770-423a-aa41-4b09dc71669b",
    verifyUrl: "https://app.rocketseat.com.br/certificates/6b116830-d770-423a-aa41-4b09dc71669b",
    highlight: true,
    topics: [
      "AI SDK & Agentes Autônomos",
      "Claude Opus 4.6 & MCP",
      "Next.js 15 (App Router, Suspense & Cache API)",
      "tRPC & Drizzle ORM",
      "TypeScript & Tailwind CSS",
      "Playwright & Spec-driven Development",
    ],
  },
  {
    title: "NestJS — Arquitetura de Microsserviços & APIs",
    issuer: "Faculdade de Tecnologia Rocketseat",
    date: "Jun 2024",
    hours: "12h",
    code: "97284fdd-d391-4e27-ba8a-e20e8c7de960",
    verifyUrl: "https://app.rocketseat.com.br/certificates/97284fdd-d391-4e27-ba8a-e20e8c7de960",
    topics: [
      "NestJS Framework",
      "Injeção de Dependência (IoC)",
      "Controllers & Services",
      "Validação com Zod",
      "Testes Automatizados com Vitest",
    ],
  },
  {
    title: "DDD no Node.js & Clean Architecture",
    issuer: "Faculdade de Tecnologia Rocketseat",
    date: "Jun 2024",
    hours: "8h",
    code: "79c4de5a-70be-4777-87a5-cb6fb21d7906",
    verifyUrl: "https://app.rocketseat.com.br/certificates/79c4de5a-70be-4777-87a5-cb6fb21d7906",
    topics: [
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
      "Entidades, Value Objects & Agregados",
      "Repositórios & Casos de Uso Desacoplados",
    ],
  },
  {
    title: "NLW Pocket: Mobile — React Native",
    issuer: "Rocketseat",
    date: "Dez 2024",
    hours: "5h",
    code: "f836b165-9165-4031-938c-5a5a126f0a39",
    verifyUrl: "https://app.rocketseat.com.br/certificates/f836b165-9165-4031-938c-5a5a126f0a39",
    topics: [
      "React Native & Expo Framework",
      "Expo Router (File-based routing)",
      "Leitura de QRCode via Câmera",
      "Geolocalização & Mapas",
      "Consumo de APIs Node.js",
    ],
  },
  {
    title: "Conectar — Fundamentos de Computação & Programação",
    issuer: "Faculdade de Tecnologia Rocketseat",
    date: "Set 2022",
    hours: "3h",
    code: "088fe52a-867d-4c04-8fbc-cb7dea721003",
    verifyUrl: "https://app.rocketseat.com.br/certificates/088fe52a-867d-4c04-8fbc-cb7dea721003",
    topics: [
      "Introdução à Programação",
      "Arquitetura de Computadores",
      "Protocolos & Funcionamento da Internet",
    ],
  },
]

export function CertificationsSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2500)
  }

  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 bg-card/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
                Certificações & Credenciais
              </h2>
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto mb-12">
            Especializações e certificações técnicas com validação oficial e foco em arquitetura, microsserviços, inteligência artificial e ecossistema moderno.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const isCopied = copiedCode === cert.code
            return (
              <ScrollReveal key={cert.title} direction="up" delay={0.1 + index * 0.08}>
                <div
                  className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full group ${
                    cert.highlight
                      ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/40 shadow-lg shadow-primary/5 hover:border-primary"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header with Issuer and Badges */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`p-2.5 rounded-lg border ${
                            cert.highlight
                              ? "bg-primary/20 border-primary/40 text-primary"
                              : "bg-secondary border-border text-muted-foreground"
                          }`}
                        >
                          {cert.highlight ? (
                            <Sparkles className="h-5 w-5 text-primary" />
                          ) : (
                            <Award className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary font-mono block">
                            {cert.issuer}
                          </span>
                          <span className="text-[11px] text-muted-foreground">{cert.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cert.hours && (
                          <Badge variant="outline" className="text-[10px] font-mono flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {cert.hours}
                          </Badge>
                        )}
                        {cert.highlight && (
                          <Badge className="text-[10px] bg-primary text-primary-foreground font-mono">
                            Destaque
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors leading-snug">
                      {cert.verifyUrl ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1.5"
                        >
                          {cert.title}
                          <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h3>

                    {/* Topics List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                        Competências & Conteúdos:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/60 text-secondary-foreground border border-border/60 flex items-center gap-1"
                          >
                            <CheckCircle2 className="h-2.5 w-2.5 text-primary shrink-0" />
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification footer */}
                  {cert.verifyUrl && (
                    <div className="mt-6 pt-4 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      {cert.code ? (
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground bg-secondary/40 px-2.5 py-1.5 rounded-md border border-border/50">
                          <span className="text-slate-400">Badge / Código:</span>
                          <span className="text-foreground truncate max-w-[130px]" title={cert.code}>
                            {cert.code.slice(0, 8)}...{cert.code.slice(-4)}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(cert.code!)}
                            className="ml-auto hover:text-primary transition-colors p-1"
                            title="Copiar código de validação"
                            aria-label="Copiar código"
                          >
                            {isCopied ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      ) : (
                        <div />
                      )}

                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:underline font-mono text-[11px] font-medium shrink-0 ml-auto sm:ml-0"
                      >
                        Validar Credencial
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
