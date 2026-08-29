"use client"

import { Linkedin, Mail, MapPin, MessageSquare, ExternalLink, Globe, ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Contato & Conexão</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Vamos construir soluções robustas juntos?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Seja para projetos técnicos de alta criticidade, consultoria em arquitetura de software e IA aplicada
              ou desenvolvimento de plataformas robustas através da <strong className="text-foreground">XM CODE</strong>, estou à
              disposição.
            </p>

            {/* Location & Response Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Brasília, Distrito Federal, Brasil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Disponível para novos projetos</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-900/30" asChild>
                <a
                  href="https://wa.me/556196324945?text=Ol%C3%A1%20Lucas,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Direto (+55 61 9632-4945)
                </a>
              </Button>

              <Button variant="default" size="lg" asChild>
                <a href="mailto:contato@xmcode.com.br">
                  <Mail className="mr-2 h-4 w-4" />
                  contato@xmcode.com.br
                </a>
              </Button>
            </div>

            {/* Social & Corporate Channels Grid */}
            <div className="grid sm:grid-cols-3 gap-3 pt-6 text-left max-w-xl mx-auto">
              <a
                href="https://xmcode.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-muted-foreground group-hover:text-primary mb-2">
                  <Globe className="h-4 w-4" />
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="font-bold text-foreground text-xs block group-hover:text-primary transition-colors">
                    XM CODE
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono">xmcode.com.br</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-xavier-209b8999/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-muted-foreground group-hover:text-primary mb-2">
                  <Linkedin className="h-4 w-4" />
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="font-bold text-foreground text-xs block group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono">/in/lucas-xavier</span>
                </div>
              </a>

              <a
                href="https://github.com/ldfxavier"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-muted-foreground group-hover:text-primary mb-2">
                  <Github className="h-4 w-4" />
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="font-bold text-foreground text-xs block group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono">@ldfxavier</span>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
