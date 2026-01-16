"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Pós-graduação Lato Sensu",
    field: "Desenvolvimento de Sistemas Web",
    institution: "Anhanguera Educacional",
    period: "2021",
  },
  {
    degree: "Bacharel em Sistemas de Informação",
    field: "Sistema de Informação",
    institution: "Anhanguera Educacional",
    period: "2010 - 2014",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Formação</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary text-sm mb-2">{edu.field}</p>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-muted-foreground text-xs mt-2">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
