"use client"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "ReactJS", "React Native", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "PHP", "Laravel", "Zend", "Adonis", "NestJS"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Jira", "Bamboo", "Git", "Microservices", "REST APIs"],
  },
]

import { ScrollReveal } from "@/components/scroll-reveal"

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Skills</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} direction="up" delay={0.2 + index * 0.1}>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-default flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
