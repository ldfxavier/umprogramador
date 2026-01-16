"use client"

import { Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Contato</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Vamos construir algo incrível juntos?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estou em busca de oportunidades que me permitam aplicar minhas habilidades em desenvolvimento full-stack em
              um ambiente desafiador e colaborativo.
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Brasília, Distrito Federal, Brasil</span>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button variant="default" size="lg" asChild>
                <a href="mailto:ldfxavier@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/lucas-xavier-209b8999/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
