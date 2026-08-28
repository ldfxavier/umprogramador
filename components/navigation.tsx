"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin, MessageSquare, Menu, X, Globe } from "lucide-react"

const navItems = [
  { label: "XM CODE", href: "#xmcode" },
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificações", href: "#certifications" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 120) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2">
          <span className="font-mono text-lg font-black tracking-tight">
            LX<span className="text-primary">.</span>
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 hidden sm:inline-block">
            XM CODE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-medium tracking-wide transition-colors hover:text-primary",
                activeSection === item.href.slice(1) ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social and Quick Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://xmcode.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 px-2.5 py-1 rounded-md transition-colors font-mono flex items-center gap-1"
          >
            <Globe className="h-3 w-3" />
            xmcode.com.br
          </a>
          <a
            href="https://github.com/ldfxavier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-xavier-209b8999/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary"
          aria-label="Alternar menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-xl bg-card border border-border space-y-2 shadow-2xl animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block py-2 px-3 rounded-lg text-sm transition-colors",
                activeSection === item.href.slice(1)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-border flex items-center justify-between">
            <a
              href="https://xmcode.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary font-mono flex items-center gap-1"
            >
              <Globe className="h-3.5 w-3.5" />
              xmcode.com.br
            </a>
            <div className="flex gap-2">
              <a
                href="https://github.com/ldfxavier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary p-1"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-xavier-209b8999/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary p-1"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
