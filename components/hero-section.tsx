"use client"

import { ArrowDown, Github, Linkedin, Mail, Sparkles, Building2, MessageSquare, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center relative px-6 lg:px-12 pt-24 pb-16 overflow-hidden">
      {/* Grid and ambient background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,223,130,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,223,130,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="space-y-6 flex-1 text-center lg:text-left">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono tracking-wider shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Fundador & CTO na XM CODE · Arquiteto de Software</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
                Lucas <span className="text-primary">Xavier</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Engenheiro de Software & Lead Architect com <span className="text-foreground font-semibold">+16 anos</span> de
                experiência. Responsável pela liderança técnica de TI, arquitetura de ecossistemas corporativos e governamentais de alta criticidade,
                inteligência artificial aplicada, microsserviços e sistemas de alta escala.
              </p>
            </ScrollReveal>

            {/* Feature Highlights Badges */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <Badge variant="secondary" className="font-mono text-xs py-1 px-2.5">
                  ✦ +16 Anos de Experiência
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs py-1 px-2.5">
                  ✦ 49+ Módulos em Produção
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs py-1 px-2.5">
                  ✦ IA Aplicada & Clean Architecture
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                  <a href="#xmcode">
                    <Building2 className="mr-2 h-4 w-4" />
                    Conhecer a XM CODE
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/556196324945?text=Ol%C3%A1%20Lucas,%20vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4 text-emerald-400" />
                    WhatsApp Direto
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/lucas-xavier-209b8999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all hover:scale-110"
                  aria-label="LinkedIn de Lucas Xavier"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/ldfxavier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all hover:scale-110"
                  aria-label="GitHub de Lucas Xavier"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:ldfxavier@gmail.com"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all hover:scale-110"
                  aria-label="Email de Lucas Xavier"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Photo & Avatar frame */}
          <ScrollReveal direction="left" delay={0.3} className="relative flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              {/* Geometric Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed animate-spin-slow" />
              {/* Inner Ring */}
              <div className="absolute inset-2 rounded-full border border-primary/40" />
              {/* Photo */}
              <Image
                src="/images/lucas-xavier.png"
                alt="Lucas Xavier - Fundador & CTO XM CODE"
                fill
                className="rounded-full object-cover p-3"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card/90 border border-primary/40 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-mono text-primary shadow-xl shrink-0 whitespace-nowrap">
                Fundador & CTO
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <a
        href="#xmcode"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce p-2"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
