"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,180,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="space-y-6 flex-1">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">Desenvolvedor Full-Stack Sênior</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              <span className="text-balance">Lucas Xavier</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Construo interfaces dinâmicas e escaláveis, transformando ideias em soluções digitais com{" "}
              <span className="text-primary">+14 anos</span> de experiência em desenvolvimento web.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" size="lg" className="group" asChild>
                <a href="#contact">
                  Entre em contato
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#experience">Ver experiência</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://www.linkedin.com/in/lucas-xavier-209b8999/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ldfxavier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border border-primary/30" />
              {/* Photo */}
              <Image
                src="/images/lucas-xavier.png"
                alt="Lucas Xavier"
                fill
                className="rounded-full object-cover p-2"
                priority
              />
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-primary/10" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
