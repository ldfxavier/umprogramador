import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-border bg-card/20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span>© {new Date().getFullYear()} Lucas Xavier.</span>
          <span className="hidden sm:inline">·</span>
          <span>
            Fundador & CTO na{" "}
            <a
              href="https://xmcode.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              XM CODE
            </a>
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="https://xmcode.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            xmcode.com.br
          </a>
          <Link href="/politica-de-privacidade" className="hover:underline hover:text-foreground transition-colors">
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  )
}
