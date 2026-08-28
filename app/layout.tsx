import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Lucas Xavier | Fundador da XM CODE · Arquiteto de Software & Engenheiro Full-Stack Sênior",
  description:
    "Lucas Xavier: Fundador da XM CODE (xmcode.com.br), Engenheiro de Software & Lead Architect com +16 anos de experiência em plataformas públicas e corporativas de alta criticidade, IA Aplicada, Next.js, Node.js, NestJS e DDD.",
  keywords: [
    "Lucas Xavier",
    "XM CODE",
    "Arquiteto de Software",
    "Engenheiro de Software Sênior",
    "Desenvolvedor Full Stack",
    "XM LEGIS",
    "XM Gestão Pública",
    "Inteligência Artificial Aplicada",
    "Next.js 15",
    "NestJS",
    "Node.js",
    "Domain-Driven Design",
    "Brasília DF",
  ],
  authors: [{ name: "Lucas Xavier", url: "https://xmcode.com.br" }],
  openGraph: {
    title: "Lucas Xavier | Fundador da XM CODE & Arquiteto de Software Sênior",
    description:
      "+16 anos de experiência em engenharia de software, sistemas governamentais de grande porte, inteligência artificial e ecossistemas escaláveis.",
    url: "https://umprogramador.com.br",
    siteName: "Lucas Xavier - Portfólio & Currículo",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans antialiased ${inter.variable} ${jetbrainsMono.variable} bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
