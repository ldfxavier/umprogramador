"use client"

import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Cpu,
  FileCheck,
  Vote,
  Fingerprint,
  TrendingUp,
  Scale,
  Bot,
  Building2,
  Landmark,
  ArrowUpRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const platforms = [
  {
    badge: "Poder Legislativo & Câmaras",
    name: "XM LEGIS",
    tagline: "Processo Legislativo Digital Inteligente",
    icon: Landmark,
    modulesCount: "14 Módulos Integrados",
    description:
      "Plataforma completa para digitalização total e modernização de Câmaras Municipais, eliminando o papel e acelerando a produção legislativa com Inteligência Artificial.",
    features: [
      {
        icon: Bot,
        title: "Assistente Legislativo com IA",
        desc: "Redação de matérias em estrita conformidade com a LC 95/98 e geração automática de resumos em linguagem cidadã.",
      },
      {
        icon: Vote,
        title: "Votação Eletrônica em Tempo Real",
        desc: "Painel de votação ao vivo com WebSockets, controle de quórum, presença e integração imediata com telão.",
      },
      {
        icon: ShieldCheck,
        title: "Assinatura Digital ICP-Brasil (PAdES)",
        desc: "Validade jurídica plena com suporte a certificados digitais A1 e A3 para vereadores e equipe técnica.",
      },
      {
        icon: FileCheck,
        title: "Protocolo Eletrônico com OCR & IA",
        desc: "Triagem automatizada de documentos, tramitação 100% sem papel e portal de transparência LAI integrado.",
      },
    ],
    techs: ["Next.js 15", "Node.js", "WebSockets", "AI SDK", "PostgreSQL", "ICP-Brasil", "Tailwind CSS"],
  },
  {
    badge: "Prefeituras & Previdência Municipal",
    name: "XM Gestão Pública",
    tagline: "Gestão Integrada, Licitações & Previdência RPPS",
    icon: Building2,
    modulesCount: "35 Módulos Integrados",
    description:
      "Ecossistema robusto para administração municipal, autarquias e previdência própria (RPPS/IPREM), unificando governança, transparência e serviços ao cidadão.",
    features: [
      {
        icon: Fingerprint,
        title: "Prova de Vida Digital & Biometria Facial",
        desc: "Censo previdenciário digital com IA para reconhecimento biométrico seguro e prova de vida sem filas.",
      },
      {
        icon: Scale,
        title: "Licitações & Compras (Lei 14.133/2021)",
        desc: "Assistente de IA para elaboração de Termos de Referência, Editais e conformidade com a Nova Lei de Licitações.",
      },
      {
        icon: TrendingUp,
        title: "Concessão de Aposentadorias & Comprev",
        desc: "Motor de regras para a Emenda Constitucional 103/2019, emissão de CTC e compensação previdenciária.",
      },
      {
        icon: Cpu,
        title: "Contabilidade Pública & BI Executivo",
        desc: "Padrão PCASP/STN, orçamentos PPA/LDO/LOA, painel executivo do prefeito e portal da transparência.",
      },
    ],
    techs: ["NestJS", "TypeScript", "Biometria Facial", "PostgreSQL", "Redis", "Docker", "Drizzle ORM"],
  },
]

const stats = [
  { value: "49+", label: "Módulos em Produção", desc: "Entre XM LEGIS e XM Gestão" },
  { value: "99.9%", label: "Disponibilidade (SLA)", desc: "Infraestrutura escalável em nuvem" },
  { value: "100%", label: "Conformidade LGPD", desc: "Segurança de dados e auditoria total" },
  { value: "< 1s", label: "Tempo de Resposta", desc: "Alta performance de processamento" },
]

export function XMCodeSection() {
  return (
    <section id="xmcode" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-card/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
                Empreendimento & Engenharia
              </h2>
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        {/* Company Header Card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-card via-card/90 to-card/50 border border-primary/30 relative overflow-hidden shadow-2xl mb-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Empresa Fundada & Liderada por Lucas Xavier
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight flex items-center gap-3">
                  XM CODE
                  <span className="text-sm font-normal text-muted-foreground font-mono">
                    xmcode.com.br
                  </span>
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Empresa de engenharia de software e inteligência artificial especializada em plataformas de alta
                  criticidade para o setor público e privado. Arquitetura orientada a microsserviços, inteligência
                  artificial aplicada à automação de processos, biometria facial, votação eletrônica em tempo real e
                  assinatura digital padrão ICP-Brasil.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Button size="lg" className="group" asChild>
                  <a href="https://xmcode.com.br" target="_blank" rel="noopener noreferrer">
                    Visitar XM CODE
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Falar sobre Projetos</a>
                </Button>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">{stat.value}</div>
                  <div className="text-xs font-semibold text-primary">{stat.label}</div>
                  <div className="text-[11px] text-muted-foreground">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Platforms Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <h4 className="text-xl font-bold text-foreground">Plataformas em Produção</h4>
            <p className="text-xs text-muted-foreground">
              Sistemas desenvolvidos do zero com foco em escalabilidade, governança pública e conformidade legal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <ScrollReveal key={platform.name} direction="up" delay={0.2 + index * 0.1}>
                  <div className="p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-xl hover:shadow-primary/5">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-primary block">
                            {platform.badge}
                          </span>
                          <h5 className="text-2xl font-bold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                            {platform.name}
                          </h5>
                          <p className="text-xs text-muted-foreground">{platform.tagline}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{platform.description}</p>

                      {/* Feature Items */}
                      <div className="space-y-3 pt-2">
                        {platform.features.map((feat, fIdx) => {
                          const FeatIcon = feat.icon
                          return (
                            <div
                              key={fIdx}
                              className="p-3 rounded-lg bg-secondary/40 border border-border/50 flex items-start gap-3 text-xs"
                            >
                              <FeatIcon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-foreground block">{feat.title}</strong>
                                <span className="text-muted-foreground">{feat.desc}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Tech Badges & Footer */}
                    <div className="pt-6 mt-6 border-t border-border space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="font-mono text-[11px] border-primary/40 text-primary">
                          {platform.modulesCount}
                        </Badge>
                        <a
                          href="https://xmcode.com.br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                        >
                          Ver no ecossistema <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {platform.techs.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-[10px] font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
