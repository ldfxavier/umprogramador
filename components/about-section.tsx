"use client"

import { Code2, Database, Layers, Zap, Bot, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const highlights = [
  {
    icon: Layers,
    title: "Arquitetura & DDD",
    description: "Modelagem de domínio rica, Clean Architecture e microsserviços desacoplados e de fácil manutenção.",
  },
  {
    icon: Bot,
    title: "IA & Automação Prática",
    description: "Integração de LLMs, agentes autônomos, MCP, OCR inteligente e biometria facial em sistemas reais.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Conformidade",
    description: "Assinatura ICP-Brasil (PAdES), conformidade estrita com LGPD e trilha de auditoria completa.",
  },
  {
    icon: Database,
    title: "Bancos & Otimização",
    description: "Modelagem relacional complexa em PostgreSQL e MySQL, tuning de queries e caching estratégico.",
  },
  {
    icon: Code2,
    title: "Full-Stack de Alto Nível",
    description: "Domínio profundo de ponta a ponta: Node.js, NestJS, TypeScript, Next.js 15, React Native e PHP/Laravel.",
  },
  {
    icon: Zap,
    title: "Performance & SLA",
    description: "Sistemas resilientes de baixa latência (<1s), WebSockets em tempo real e alta disponibilidade.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Sobre a Trajetória</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={0.1}>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                Engenharia de Software de Missão Crítica com Foco em Resultados Reais
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de <span className="text-foreground font-semibold">16 anos de experiência sólida</span> no mercado
                de tecnologia, atuo como Fundador e Arquiteto Líder na{" "}
                <span className="text-primary font-medium">XM CODE</span>, projetando e entregando plataformas robustas que
                transformam a administração pública e operações empresariais.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Minha especialidade engloba desde a modelagem de domínio complexo com{" "}
                <span className="text-foreground">Domain-Driven Design (DDD) e Clean Architecture</span> até a
                implementação de soluções inovadoras de{" "}
                <span className="text-foreground">Inteligência Artificial Aplicada</span>, como agentes autônomos,
                redação legislativa assistida por IA, biometria facial e assinatura digital com padrão ICP-Brasil.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-muted-foreground leading-relaxed">
                Acredito na engenharia de software sustentável: código limpo, performático, seguro e estritamente aderente
                às regras de negócio e de governança (LGPD).
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} direction="up" delay={0.2 + index * 0.08}>
                  <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group h-full flex flex-col justify-start">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 w-fit text-primary mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-sm group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
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
