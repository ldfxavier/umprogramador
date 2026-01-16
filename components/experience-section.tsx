"use client"

import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "AGO 2023 — PRESENTE",
    title: "Desenvolvedor Full Stack",
    company: "G4F",
    location: "Brasília, DF",
    description:
      "Desenvolvimento full stack utilizando ReactJS, React-Native, NodeJS, PHP e Zend em projetos de consultoria empresarial.",
    skills: ["ReactJS", "React Native", "Node.js", "PHP", "Zend"],
    url: "https://www.g4f.com.br",
  },
  {
    period: "MAI 2022 — NOV 2023",
    title: "Desenvolvedor Back End",
    company: "Basis Tecnologia",
    location: "Brasília, DF",
    description: "Desenvolvimento backend focado em PHP, NodeJS e Laravel para soluções de TI e consultoria.",
    skills: ["PHP", "Node.js", "Laravel"],
    url: "https://www.basis.com.br",
  },
  {
    period: "SET 2021 — JUL 2022",
    title: "Desenvolvedor Back End",
    company: "CredPago",
    location: "Joinville, SC",
    description:
      "Desenvolvimento de APIs e sistemas backend para plataforma de serviços financeiros utilizando PHP, NodeJS, Laravel e Adonis.",
    skills: ["PHP", "Node.js", "Laravel", "Adonis"],
    url: "https://credpago.com.br",
  },
  {
    period: "JAN 2017 — OUT 2021",
    title: "Programador Pleno",
    company: "Marktclub",
    location: "Brasília, DF",
    description:
      "Desenvolvimento mobile e web utilizando React-Native, ReactJS, PHP e Laravel para plataforma de social business.",
    skills: ["React Native", "ReactJS", "PHP", "Laravel"],
    url: "https://youhuul.com.br",
  },
  {
    period: "MAI 2011 — DEZ 2016",
    title: "Analista de Sistemas",
    company: "SAGA",
    location: "Brasília, DF",
    description:
      "Análise de sistemas e desenvolvimento web utilizando PHP, HTML, CSS, JavaScript, além de gestão de projetos com Jira e Bamboo.",
    skills: ["PHP", "JavaScript", "Jira", "Bamboo", "HTML/CSS"],
    url: "https://saga.com.br",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Experiência</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4 p-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {exp.title} · {exp.company}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <>
                          {exp.title} · {exp.company}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
