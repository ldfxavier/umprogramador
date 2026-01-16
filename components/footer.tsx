export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Lucas Xavier. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
